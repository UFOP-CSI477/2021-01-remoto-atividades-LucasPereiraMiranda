import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StartupsModule } from './modules/startups/startups.module';
import { AnnualBillingsModule } from './modules/annual-billings/annual-billings.module';
import { CategoriesModule } from './modules/categories/categories.module';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import * as ormConfig from './config/orm.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(ormConfig),
    StartupsModule,
    AnnualBillingsModule,
    CategoriesModule,
    UsersModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
