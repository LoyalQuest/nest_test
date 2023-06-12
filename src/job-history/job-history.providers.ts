import { DataSource } from 'typeorm';
import { JobHistory } from '../entity/job-history.entity';

export const jobHistoryProviders = [
  {
    provide: 'JOBHISTORY_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(JobHistory),
    inject: ['DATA_SOURCE'],
  },
];
