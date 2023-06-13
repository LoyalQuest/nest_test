import { Repository } from 'typeorm';
import { Inject, Injectable } from '@nestjs/common';
import { Location } from '../entity/location.entity';

@Injectable()
export class LocationService {
  constructor(
    @Inject('LOCATION_REPOSITORY')
    private locationRepository: Repository<Location>,
  ) {}

  async findOne(id: number): Promise<Location> {
    return await this.locationRepository.findOne({
      where: { location_id: id },
    });
  }

  async findAll(): Promise<Location[]> {
    return this.locationRepository.find();
  }
}
