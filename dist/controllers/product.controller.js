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
exports.deleteProduct = exports.updateProduct = exports.getProducts = exports.createProduct = void 0;
const typeorm_1 = require("typeorm");
const Product_1 = require("../entity/Product");
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newProduct = (0, typeorm_1.getRepository)(Product_1.Product).create(req.body);
    const results = yield (0, typeorm_1.getRepository)(Product_1.Product).save(newProduct);
    console.log("Guardado", req.body);
    return res.json(results);
});
exports.createProduct = createProduct;
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const results = yield (0, typeorm_1.getRepository)(Product_1.Product).find();
    return res.json(results);
});
exports.getProducts = getProducts;
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield (0, typeorm_1.getRepository)(Product_1.Product).findOne(req.params.id);
    if (product) {
        (0, typeorm_1.getRepository)(Product_1.Product).merge(product, req.body);
        const results = yield (0, typeorm_1.getRepository)(Product_1.Product).save(product);
        return res.json(results);
    }
    return res.status(404).json({ msg: "Not product found" });
});
exports.updateProduct = updateProduct;
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const results = yield (0, typeorm_1.getRepository)(Product_1.Product).delete(req.params.id);
    return res.json(results);
});
exports.deleteProduct = deleteProduct;
