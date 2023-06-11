import * as fs from 'fs';
import { AppDataSource } from './data-source';

export async function executeSQLQueries() {
  const sqlFilePath = 'src/snippet/hr-schema-mysql.sql';
  const sqlQueries = fs.readFileSync(sqlFilePath).toString();

  const queryRunner = AppDataSource.createQueryRunner();

  await queryRunner.connect();

  try {
    await queryRunner.startTransaction();

    // 여러 줄의 쿼리를 개행 문자('\n')를 기준으로 분리하여 실행
    const queries = sqlQueries.split(';');

    for (const query of queries) {
      await queryRunner.query(query);
    }

    await queryRunner.commitTransaction();
  } catch (error) {
    console.error('Failed to execute SQL queries:', error);
    await queryRunner.rollbackTransaction();
  } finally {
    await queryRunner.release();
  }
}
