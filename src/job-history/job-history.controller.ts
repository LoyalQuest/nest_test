import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { JobHistoryService } from './job-history.service';
import { JobHistoryEntity } from '../entity/job-history.entity';

@Controller('job_history')
export class JobHistoryController {
  constructor(private jobHistoryService: JobHistoryService) {}

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<JobHistoryEntity> {
    const jobHistory = await this.jobHistoryService.findOne(id);
    if (!jobHistory) {
      throw new NotFoundException("JobHistoryEntity doesn't exist");
    } else {
      return jobHistory;
    }
  }

  @Get()
  async findAll() {
    return this.jobHistoryService.findAll();
  }
}
