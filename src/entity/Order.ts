import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne} from "typeorm";
import { Costumer } from "./Costumer";

@Entity()
export class Order{
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => Costumer, {nullable: false})
  costumer: Costumer

  @Column({
    type: "uuid",
    array: true
  })
  products: string[];

  @Column({
    type: "numeric"
  })
  total_price: number;

  @CreateDateColumn()
  ordered_at: Date;

  @Column({
    type: "date",
    nullable: true,
  })
  delivered_at: Date

  @Column({
    type: "varchar",
    length: 10,
    default: "active"
  })
  status: string
}

