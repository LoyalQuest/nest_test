import { Controller, Get, Param } from '@nestjs/common';
import { BusinessValidateService } from './business-validate.service';
import {Observable} from "rxjs";
import axios, {AxiosResponse} from "axios";

@Controller('business_validation')
export class BusinessValidateController {
  constructor(private businessValidateService: BusinessValidateService) {}

  @Get(':id')
  async validateBusiness(@Param('id') id: number): Promise<Observable<AxiosResponse<any>>> {
    return await this.businessValidateService.isValidBusiness(id);
  }
}
