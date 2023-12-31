import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeModule } from './employee/employee.module';
import { JobHistoryModule } from './job-history/job-history.module';
import { DepartmentModule } from './department/department.module';
import { LocationModule } from './location/location.module';
import { HttpModule } from "@nestjs/axios";
import { BusinessValidateModule } from "./business-validate/business-validate.module";

@Module({
  imports: [EmployeeModule, JobHistoryModule, DepartmentModule, LocationModule, BusinessValidateModule, HttpModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
