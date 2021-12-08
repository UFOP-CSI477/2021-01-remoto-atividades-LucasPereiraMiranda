import { Module } from '@nestjs/common';
import { AnnualBillingsService } from './annual-billings.service';
import { AnnualBillingsController } from './annual-billings.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnnualBilling } from './entities/annual-billing.entity';
import { StartupsModule } from '../startups/startups.module';

@Module({
  imports: [TypeOrmModule.forFeature([AnnualBilling]), StartupsModule],
  controllers: [AnnualBillingsController],
  providers: [AnnualBillingsService],
})
export class AnnualBillingsModule {}
