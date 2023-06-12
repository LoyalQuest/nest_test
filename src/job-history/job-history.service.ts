import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { JobHistory } from '../entity/job-history.entity';

@Injectable()
export class JobHistoryService {
  constructor(
    @Inject('JOBHISTORY_REPOSITORY')
    private jobHistoryRepository: Repository<JobHistory>,
  ) {}

  async findOne(id: number): Promise<JobHistory> {
    return await this.jobHistoryRepository.findOne({
      where: { employee_id: id },
    });
  }

  async findAll(): Promise<JobHistory[]> {
    return this.jobHistoryRepository.find();
  }
}
