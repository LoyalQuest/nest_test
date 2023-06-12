import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { JobHistoryEntity } from '../entity/job-history.entity';

@Injectable()
export class JobHistoryService {
  constructor(
    @Inject('JOBHISTORY_REPOSITORY')
    private jobHistoryRepository: Repository<JobHistoryEntity>,
  ) {}

  async findOne(id: number): Promise<JobHistoryEntity> {
    return await this.jobHistoryRepository.findOne({
      where: { employee_id: id },
    });
  }

  async findAll(): Promise<JobHistoryEntity[]> {
    return this.jobHistoryRepository.find();
  }
}
