import { DataSource } from 'typeorm';
import { JobHistoryEntity } from '../entity/job-history.entity';

export const jobHistoryProviders = [
  {
    provide: 'JOBHISTORY_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(JobHistoryEntity),
    inject: ['DATA_SOURCE'],
  },
];
