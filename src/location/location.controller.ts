import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { LocationService } from './location.service';
import { Location } from '../entity/location.entity';

@Controller('departments')
export class LocationController {
  constructor(private locationService: LocationService) {}

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Location> {
    const location = await this.locationService.findOne(id);
    if (!location) {
      throw new NotFoundException("Employee doesn't exist");
    } else {
      return location;
    }
  }

  @Get()
  async findAll() {
    return this.locationService.findAll();
  }
}
