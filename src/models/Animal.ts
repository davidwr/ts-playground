import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm'

import {
  IsInt,
  Min,
  Max,
} from 'class-validator'

@Entity()
export class Animal {
  @PrimaryGeneratedColumn()
  id: number

  @Column('varchar', {
    length: 100,
    nullable: true
  })
  name: string

  @Column('varchar', {
    length: 300,
  })
  observations: string

  @Column('int', {
    nullable: true
  })
  @IsInt()
  @Min(0)
  @Max(200)
  age: number

  @Column('varchar', {
    length: 100,
    nullable: true
  })
  breed: string

  @Column('varchar', {
    length: 50,
    nullable: true
  })
  color_main: string

  @Column('varchar', {
    length: 50,
    nullable: true
  })
  color_secundary: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}
