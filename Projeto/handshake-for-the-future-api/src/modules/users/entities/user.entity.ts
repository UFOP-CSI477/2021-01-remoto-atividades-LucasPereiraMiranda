import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Category } from '../../categories/entities/category.entity';
import { Startup } from '../../startups/entities/startup.entity';
import { envConfig } from '../../../config/env.load';

export enum UserType {
  FOUNDER = 'founder',
  INVERSTOR = 'investor',
}

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ enum: UserType })
  userType: UserType;

  @Column()
  description: string;

  @Column()
  birthDate: Date;

  @Column({ nullable: true })
  avatarUrl?: string;

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

  @ManyToMany(() => Category, (category) => category.users)
  @JoinColumn({ name: 'categoryId' })
  categories: Category[];

  @ManyToOne(() => Startup, (startup) => startup.founderUsers, {
    nullable: true,
  })
  @JoinTable()
  startup: Startup;

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, envConfig.jwt.saltRounds);
  }
}
