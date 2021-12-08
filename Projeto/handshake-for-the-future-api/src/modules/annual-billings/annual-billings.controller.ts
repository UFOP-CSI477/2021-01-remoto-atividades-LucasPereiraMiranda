import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { AnnualBillingsService } from './annual-billings.service';
import { CreateAnnualBillingDto } from './dto/create-annual-billing.dto';

@Controller('annual-billings')
export class AnnualBillingsController {
  constructor(private readonly annualBillingsService: AnnualBillingsService) {}

  @Post()
  create(@Body() createAnnualBillingDto: CreateAnnualBillingDto) {
    return this.annualBillingsService.create(createAnnualBillingDto);
  }

  @Get()
  findAllByStartup(@Query() startup) {
    return this.annualBillingsService.findAllByStartup(startup);
  }
}
