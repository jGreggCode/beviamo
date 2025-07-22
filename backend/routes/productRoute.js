import express from "express";
import {
  addProduct,
  editProduct,
  removeProduct,
  removeProductInTAble,
  getProducts,
  getProduct,
  getProductById,
} from "../controllers/productController.js";
import upload from "../middleware/multer.js";
import adminAuth from "../middleware/adminAuth.js";

const productRouter = express.Router();

productRouter.post(
  "/add",
  adminAuth,
  upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
    { name: "image4", maxCount: 1 },
  ]),
  addProduct
);
productRouter.post(
  "/edit",
  adminAuth,
  upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
    { name: "image4", maxCount: 1 },
  ]),
  editProduct
);
productRouter.delete("/:id", adminAuth, removeProduct);
productRouter.post("/remove", adminAuth, removeProductInTAble);
productRouter.get("/products", getProducts);
productRouter.get("/get-product", getProduct);
productRouter.get("/:id", getProductById);
export default productRouter;
