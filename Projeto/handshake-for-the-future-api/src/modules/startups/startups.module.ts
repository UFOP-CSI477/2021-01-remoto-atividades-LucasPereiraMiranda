import { Module } from '@nestjs/common';
import { StartupsService } from './startups.service';
import { StartupsController } from './startups.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Startup } from './entities/startup.entity';
import { CategoriesModule } from '../categories/categories.module';

@Module({
  imports: [TypeOrmModule.forFeature([Startup]), CategoriesModule],
  controllers: [StartupsController],
  providers: [StartupsService],
  exports: [TypeOrmModule, StartupsService],
})
export class StartupsModule {}
