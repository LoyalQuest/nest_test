"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.executeSQLQueries = void 0;
const fs = require("fs");
const typeorm_1 = require("typeorm");
async function executeSQLQueries() {
    const sqlFilePath = 'src/snippet/hr-schema-mysql.sql';
    const sqlQueries = fs.readFileSync(sqlFilePath).toString();
    const connection = await (0, typeorm_1.getConnection)();
    const queryRunner = connection.createQueryRunner();
    await queryRunner.connect();
    try {
        await queryRunner.startTransaction();
        const queries = sqlQueries.split(';');
        for (const query of queries) {
            await queryRunner.query(query);
        }
        await queryRunner.commitTransaction();
    }
    catch (error) {
        console.error('Failed to execute SQL queries:', error);
        await queryRunner.rollbackTransaction();
    }
    finally {
        await queryRunner.release();
    }
}
exports.executeSQLQueries = executeSQLQueries;
//# sourceMappingURL=seed.service.js.map