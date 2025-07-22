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
    res.json({ success: false, message: error });
  }
};

// Edit Product
const editProduct = async (req, res) => {
  try {
    const { id, name, description, category, price, quantity, bestSeller } =
      req.body;

    // Validate required data
    if (!id) {
      return res.json({ success: false, message: "Product ID is required" });
    }

    const product = await productModel.findById(id);
    if (!product) {
      return res.json({ success: false, message: "Product not found" });
    }

    // Update basic fields
    product.name = name || product.name;
    product.description = description || product.description;
    product.category = category || product.category;
    product.price = price ? Number(price) : product.price;
    product.quantity = quantity ? Number(quantity) : product.quantity;
    product.bestSeller =
      bestSeller === "true"
        ? true
        : bestSeller === "false"
        ? false
        : product.bestSeller;

    // Handle image uploads if new ones are sent
    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];
    const image3 = req.files.image3 && req.files.image3[0];
    const image4 = req.files.image4 && req.files.image4[0];

    const images = [image1, image2, image3, image4].filter(
      (img) => img !== undefined
    );

    if (images.length > 0) {
      const uploadedImages = await Promise.all(
        images.map(async (img) => {
          const result = await cloudinary.uploader.upload(img.path, {
            resource_type: "image",
          });
          return result.secure_url;
        })
      );

      // Replace the existing images with new ones
      product.image = uploadedImages;
    }

    await product.save();

    res.json({ success: true, message: "Product updated successfully" });
  } catch (error) {
    console.error("Error in editProduct controller", error);
    res.json({ success: false, message: "Something went wrong", error });
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
    console.error("Error in removeProduct controller", error);
    res.status(500).json({ success: false, message: "Removed product error" });
  }
};

const removeProductInTAble = async (req, res) => {
  const { id } = req.body;
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
    console.error("Error in removeProduct controller", error);
    res
      .status(500)
      .json({ success: false, message: "Remove product by id error" });
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
    console.error("Error in removeProduct controller", error);
    res.status(500).json({ success: false, message: "getProductById error" });
  }
};

// Get Product
const getProduct = async (req, res) => {
  const { id } = req.query; // ✅ FIXED

  console.log("Received product ID:", id);

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
    console.error("Error in getProduct controller:", error.message);
    res.status(500).json({ success: false, message: "Get product error" });
  }
};

export {
  addProduct,
  editProduct,
  getProducts,
  getProduct,
  removeProduct,
  removeProductInTAble,
  getProductById,
};
