import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id!: number

    @Column({
    length: 255
  })
    userId!: string
  
    @Column({
      length:40
    })
    nickName!: string

    @Column()
    password!: string

}
