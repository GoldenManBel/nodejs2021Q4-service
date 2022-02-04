import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Columns } from './column.entity';

@Entity('boards')
export class Board {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({
    type: 'varchar',
    default: 'title',
  })
  title!: string;

  @Column('json', { nullable: true })
  columns!: [Columns];
}
