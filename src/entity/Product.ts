import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn} from "typeorm";

@Entity()
export class Product{
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({
    type: "varchar",
  })
  name: string;

  @Column({
    type: "varchar",
    length: 20
  })
  category: string;

  @Column({
    type: "integer"
  })
  quantity: number;

  @Column({
    type: "numeric"
  })
  price: number

  @CreateDateColumn()
  created_at: Date
}