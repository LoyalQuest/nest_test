import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { JobHistoryService } from './job-history.service';
import { jobHistoryProviders } from './job-history.providers';
import { JobHistoryController } from './job-history.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [JobHistoryController],
  providers: [...jobHistoryProviders, JobHistoryService],
})
export class JobHistoryModule {}
