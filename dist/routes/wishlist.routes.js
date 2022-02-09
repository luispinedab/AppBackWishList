"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const wishlist_controller_1 = require("../controllers/wishlist.controller");
router.get('/wishlist', wishlist_controller_1.getWishLists);
exports.default = router;
