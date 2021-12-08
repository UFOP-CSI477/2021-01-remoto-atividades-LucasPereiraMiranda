import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Startup } from '../../startups/entities/startup.entity';

@Entity({ name: 'annual_billings' })
export class AnnualBilling {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  billing: number;

  @Column()
  year: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => Startup, (startup) => startup.annualBillings, {
    eager: true,
  })
  @JoinColumn({ name: 'startupId' })
  startup: Startup;
}
