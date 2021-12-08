import {
  IsDateString,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
} from 'class-validator';

export class CreateStartupDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  localization: string;

  @IsNotEmpty()
  @IsString()
  cellphone: string;

  @IsNotEmpty()
  @IsDateString()
  foundation_date: Date;

  @IsUrl()
  @IsOptional()
  logoUrl?: string;

  @IsNotEmpty()
  @IsUrl()
  linkedinUrl: string;

  @IsNotEmpty()
  @IsUrl()
  facebookUrl: string;

  @IsNotEmpty()
  @IsUrl()
  instagramUrl: string;

  @IsNotEmpty()
  @IsString({ each: true })
  categoryIds: string[];
}
