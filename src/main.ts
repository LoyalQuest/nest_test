import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { executeSQLQueries } from "./seed.service";

export async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await executeSQLQueries();
  await app.listen(3000);
}

