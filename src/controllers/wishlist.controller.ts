import {Request,Response} from 'express';
import {getRepository}from 'typeorm';
import {WishList} from '../entity/wishlist';

export const createWishList = async(req:Request,res:Response):Promise<Response>=>{
    const newWishList = getRepository(WishList).create(req.body);
    const results = await getRepository(WishList).save(newWishList);
    console.log("Guardado",req.body);
    return res.json(results);
};
export const getWishLists = async(req:Request,res:Response):Promise<Response>=>{
    const results = await getRepository(WishList).find({relations:['IDClient','product']});
    return res.json(results);
};
export const updateWishList = async(req:Request,res:Response):Promise<Response>=>{
    const wishList = await getRepository(WishList).findOne(req.params.id);
    if (wishList){
        getRepository(WishList).merge(wishList,req.body);
       const results =  await getRepository(WishList).save(wishList);
       return res.json(results);
    }
    return res.status(404).json({msg: "Not WishList found"});
};
export const deleteWishList = async(req:Request,res:Response):Promise<Response>=>{
    const results = await getRepository(WishList).delete(req.params.id);
    return res.json(results);
};