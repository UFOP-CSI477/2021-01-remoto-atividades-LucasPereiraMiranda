import {
  IsDateString,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
} from 'class-validator';
import { UserType } from '../entities/user.entity';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsUrl()
  @IsOptional()
  avatarUrl?: string;

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
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsEnum(UserType)
  @IsNotEmpty()
  userType: UserType;

  @IsDateString()
  @IsNotEmpty()
  birthDate: Date;
}
