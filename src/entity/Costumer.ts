import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn} from "typeorm";

@Entity()
export class Costumer{
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({
        type: "varchar",
        length: 40
    })
    first_name: string;

    @Column({
        type: "varchar",
        length: 40
    })
    last_name: string;
    
    @Column({
        type: "varchar",
        length: 100,
        unique: true
    })
    email: string;

    @Column({
        type: "varchar"
    })
    address: string;

    @CreateDateColumn()
    registered_at: Date
}
