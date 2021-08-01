import { Entity, Column, PrimaryGeneratedColumn   } from 'typeorm'

@Entity()
export class Animal {
  @PrimaryGeneratedColumn ()
  id: number

  @Column({
    length: 100
  })
  name: string

  @Column()
  description: string

  @Column()
  age: number

  @Column()
  breed: number

  @Column()
  isPublished: boolean
}
