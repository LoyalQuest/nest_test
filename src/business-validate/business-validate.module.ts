import { Module } from '@nestjs/common';
import {BusinessValidateController} from "./business-validate.controller";
import {BusinessValidateService} from "./business-validate.service";
import {businessValidateProviders} from "./business-validate.providers";
import {DatabaseModule} from "../database/database.module";
import {HttpModule} from "@nestjs/axios";

@Module({
    imports: [DatabaseModule, HttpModule],
    controllers: [BusinessValidateController],
    providers: [...businessValidateProviders, BusinessValidateService],
})
export class BusinessValidateModule {}
