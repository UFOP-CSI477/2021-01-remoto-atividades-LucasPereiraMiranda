import { IsNotEmpty, IsNumber, IsNumberString } from 'class-validator';
import { Startup } from '../../startups/entities/startup.entity';

export class CreateAnnualBillingDto {
  @IsNotEmpty()
  @IsNumberString()
  billing: number;

  @IsNotEmpty()
  @IsNumberString()
  year: number;

  @IsNotEmpty()
  @IsNumber()
  startupId: Startup;
}
