import { Entity,Column,PrimaryGeneratedColumn, ManyToOne} from "typeorm";
@Entity("product")
export class Product {
    @PrimaryGeneratedColumn()
    IDProduct:number;
    @Column()
    Name:string;
    @Column()
    Price:number;
    @Column()
    amount:number;
    @Column()
    ModificationDate: Date;
    @Column()
    CreationDate: Date;
}