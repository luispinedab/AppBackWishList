import { Router } from "express";
const router = Router()
import {getWishLists,deleteWishList,createWishList,updateWishList} from '../controllers/wishlist.controller';
router.get('/wishlist', getWishLists);
export default router;