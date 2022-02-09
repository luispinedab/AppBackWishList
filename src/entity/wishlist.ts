import {Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToOne} from 'typeorm';
import {Product} from './Product';
import { User } from './User';

@Entity("wishlist")
export class WishList {
    @PrimaryGeneratedColumn()
    IDwishlist:number;
    @OneToOne(() => Product)
    @JoinColumn()
    product: Product;
    @ManyToOne(type=>User,idClient=>idClient.wishLists)
    IDClient: User;
}