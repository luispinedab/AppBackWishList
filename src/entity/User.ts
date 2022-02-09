import { Entity,Column,PrimaryGeneratedColumn, ManyToOne,OneToMany } from "typeorm";
import { UserType } from "./UserType";
import { WishList } from "./wishlist";
@Entity("user")
export class User {
    @PrimaryGeneratedColumn()
    IDUser:number;
    @Column()
    FirstName:string;
    @Column()
    LastName:string;
    @Column()
    Identification: number;
    @ManyToOne(type=>UserType,IDUserType=>IDUserType.users)
    IDUserType: UserType;
    @OneToMany(type => WishList, wishList => wishList.IDClient) 
    wishLists: WishList[];
    @Column()
    Nickname: string;
    @Column()
    Password: string;
    @Column()
    ModificationDate: Date;
    @Column()
    CreationDate: Date;
}