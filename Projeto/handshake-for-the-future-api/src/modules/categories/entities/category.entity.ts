import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';

import { Startup } from '../../startups/entities/startup.entity';
import { User } from '../../users/entities/user.entity';

@Entity({ name: 'categories' })
export class Category {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  description?: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToMany(() => Startup, (startup) => startup.categories)
  @JoinTable()
  startups: Startup[];

  @ManyToMany(() => User, (user) => user.categories)
  @JoinTable()
  users: User[];
}
