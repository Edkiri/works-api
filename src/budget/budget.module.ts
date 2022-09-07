import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkModule } from 'src/work/work.module';

import { Budget, BudgetUnit } from './entities';
import { BudgetService, BudgetUnitService } from './services';

@Module({
  imports: [TypeOrmModule.forFeature([Budget, BudgetUnit]), WorkModule],
  providers: [BudgetService, BudgetUnitService],
  exports: [BudgetService, BudgetUnitService],
})
export class BudgetModule {}
