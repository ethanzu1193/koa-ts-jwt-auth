import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number = -1

    @Column({
      length:255
    })
    userId: string = ''
  
    @Column({
      length:40
    })
    nickName: string = ''

    @Column()
    password: string = ''

    @Column("integer")
    age: number = -1

}
