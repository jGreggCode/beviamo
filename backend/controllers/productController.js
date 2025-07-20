import { v2 as cloudinary } from "cloudinary";
import productModel from "../models/productModel.js";

// Add product
const addProduct = async (req, res) => {
  try {
    const { name, description, price, category, quantity, bestSeller } =
      req.body;
    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];
    const image3 = req.files.image3 && req.files.image3[0];
    const image4 = req.files.image4 && req.files.image4[0];

    const quantityNum = Number(quantity);
    const priceNum = Number(price);

    // If exist just add quantity
    const exists = await productModel.findOne({ name });

    if (exists) {
      // Update quantity instead of creating new
      exists.quantity += quantityNum;
      await exists.save();

      return res.json({
        success: true,
        message: "Product already exists, quantity increased",
      });
    }

    const images = [image1, image2, image3, image4].filter(
      (item) => item !== undefined
    );

    let imagesUrl = await Promise.all(
      images.map(async (item) => {
        let result = await cloudinary.uploader.upload(item.path, {
          resource_type: "image",
        });
        return result.secure_url;
      })
    );

    const productData = {
      name,
      description,
      category,
      quantity: quantityNum,
      price: priceNum,
      bestSeller: bestSeller === "true" ? true : false,
      image: imagesUrl,
      date: Date.now(),
    };

    console.log(productData);

    const product = new productModel(productData);
    await product.save();
    res.json({ success: true, message: "Product Added Successfully" });
  } catch (error) {
    console.error("Error in add product controller", error);
    res.json({ success: false, message: "Add Product Error" });
  }
};

// Get all products
const getProducts = async (req, res) => {
  try {
    const products = await productModel.find({});
    res.json({ success: true, products });
  } catch (error) {
    console.error("Error in get products controller", error);
    res.json({ success: false, message: "Get Products Error" });
  }
};

// Remove product
const removeProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await productModel.findByIdAndDelete(id);

    if (!deleted) {
      // Query ran but matched zero documents
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.json({ success: true, message: "Product removed" });
  } catch (error) {
    console.error("Error in removeProduct controller", err);
    res.status(500).json({ success: false, message: "Remove product error" });
  }
};

// Get Product
const getProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await productModel.findById(id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.json({ success: true, product });
  } catch (error) {
    console.error("Error in removeProduct controller", err);
    res.status(500).json({ success: false, message: "Remove product error" });
  }
};

export { addProduct, getProducts, removeProduct, getProductById };
