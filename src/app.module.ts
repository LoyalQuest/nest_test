import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeModule } from './employee/employee.module';
import { JobHistoryModule } from './job-history/job-history.module';

@Module({
  imports: [EmployeeModule, JobHistoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
