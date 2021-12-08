import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToMany,
} from 'typeorm';

import { AnnualBilling } from '../../annual-billings/entities/annual-billing.entity';
import { Category } from '../../categories/entities/category.entity';
import { User } from '../../users/entities/user.entity';

@Entity({ name: 'startups' })
export class Startup {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  localization: string;

  @Column()
  cellphone: string;

  @Column()
  foundation_date: Date;

  @Column({ nullable: true })
  logoUrl?: string;

  @Column()
  linkedinUrl: string;

  @Column()
  facebookUrl: string;

  @Column()
  instagramUrl: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => User, (founder) => founder.startup)
  founderUsers: User[];

  @OneToMany(() => AnnualBilling, (annualBilling) => annualBilling.startup)
  annualBillings: AnnualBilling[];

  @ManyToMany(() => Category, (category) => category.startups)
  categories: Category[];
}
