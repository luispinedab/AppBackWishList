"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteWishList = exports.updateWishList = exports.getWishLists = exports.createWishList = void 0;
const typeorm_1 = require("typeorm");
const wishlist_1 = require("../entity/wishlist");
const createWishList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newWishList = (0, typeorm_1.getRepository)(wishlist_1.WishList).create(req.body);
    const results = yield (0, typeorm_1.getRepository)(wishlist_1.WishList).save(newWishList);
    console.log("Guardado", req.body);
    return res.json(results);
});
exports.createWishList = createWishList;
const getWishLists = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const results = yield (0, typeorm_1.getRepository)(wishlist_1.WishList).find({ relations: ['IDClient', 'product'] });
    return res.json(results);
});
exports.getWishLists = getWishLists;
const updateWishList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const wishList = yield (0, typeorm_1.getRepository)(wishlist_1.WishList).findOne(req.params.id);
    if (wishList) {
        (0, typeorm_1.getRepository)(wishlist_1.WishList).merge(wishList, req.body);
        const results = yield (0, typeorm_1.getRepository)(wishlist_1.WishList).save(wishList);
        return res.json(results);
    }
    return res.status(404).json({ msg: "Not WishList found" });
});
exports.updateWishList = updateWishList;
const deleteWishList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const results = yield (0, typeorm_1.getRepository)(wishlist_1.WishList).delete(req.params.id);
    return res.json(results);
});
exports.deleteWishList = deleteWishList;
