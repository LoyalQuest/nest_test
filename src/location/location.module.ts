import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { LocationService } from './location.service';
import { locationProviders } from './location.providers';
import { LocationController } from './location.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [LocationController],
  providers: [...locationProviders, LocationService],
})
export class LocationModule {}
