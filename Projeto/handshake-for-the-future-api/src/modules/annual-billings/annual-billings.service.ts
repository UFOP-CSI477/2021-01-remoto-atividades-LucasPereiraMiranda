import { ConflictException, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StartupsService } from '../startups/startups.service';
import { CreateAnnualBillingDto } from './dto/create-annual-billing.dto';
import { AnnualBilling } from './entities/annual-billing.entity';

@Injectable()
export class AnnualBillingsService {
  constructor(
    @InjectRepository(AnnualBilling)
    private annualBillingRepository: Repository<AnnualBilling>,
    @Inject(StartupsService)
    private startupsService: StartupsService,
  ) {}
  async create(createAnnualBillingDto: CreateAnnualBillingDto) {
    await this.validAnnualBillingAlreadyExistsToYearAndStartup(
      createAnnualBillingDto,
    );
    const { billing, year, startupId } = createAnnualBillingDto;

    const startup = await this.startupsService.findOne(+startupId);

    const annualBilling = new AnnualBilling();
    annualBilling.billing = billing;
    annualBilling.year = year;
    annualBilling.startup = startup;

    return await this.annualBillingRepository.save(annualBilling);
  }

  async findAllByStartup({ startup }) {
    const annualBillings = await this.annualBillingRepository.find({
      where: { startup: startup },
    });
    return annualBillings;
  }

  async validAnnualBillingAlreadyExistsToYearAndStartup({
    year,
    startupId,
  }: CreateAnnualBillingDto) {
    const existsAnnualBilling = await this.annualBillingRepository.findOne({
      where: {
        year,
        startup: startupId,
      },
    });
    if (existsAnnualBilling) {
      throw new ConflictException(
        `AnnualBilling in year ${year} and startup ${startupId} already exists`,
      );
    }
  }
}
