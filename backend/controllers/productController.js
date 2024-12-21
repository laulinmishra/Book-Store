import { v2 as cloudinary } from "cloudinary";
import productModel from "../models/productModel.js";

// Controller function to create a product
const createProduct = async (req, res) => {
  try {
    const { name, description, category, price, popular } = req.body;

    // Default image URL in case no file is uploaded
    let imageUrl = "https://via.placeholder.com/150";

    // Upload the image to Cloudinary if a file is provided
    if (req.file) {
      console.log("Uploaded File:", req.file);
      imageUrl = await cloudinary.uploader
        .upload(req.file.path, { resource_type: "image" })
        .then((res) => res.secure_url);
    }

    // Construct product data
    const productData = {
      name,
      description,
      category,
      price: Number(price), // Ensure price is stored as a number
      popular: popular === "true" ? true : false, // Convert popular to boolean
      image: imageUrl, // Corrected field from `imageUrl` to `image`
      date: Date.now(), // Current timestamp for product creation
    };

    console.log("Product Data:", productData);

    // Create and save the product
    const product = new productModel(productData);
    await product.save();

    res.json({ success: true, message: "Product Created" });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.message });
  }
};

// Controller function to delete a product
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.body;

    // Validate that the ID is provided
    if (!id) {
      return res.json({ success: false, message: "Product ID is required" });
    }

    // Attempt to find and delete the product by its ID
    const deletedProduct = await productModel.findByIdAndDelete(id);

    // If no product is found, return a "not found" message
    if (!deletedProduct) {
      return res.json({ success: false, message: "Product not found" });
    }

    // Respond with a success message if the product is deleted
    res.json({ success: true, message: "Product Deleted" });
  } catch (error) {
    console.error(error);

    // Catch and respond with any unexpected errors
    res.json({ success: false, message: error.message });
  }
};


// Controller function to list all products
const getAllProduct = async (req, res) => {
  try {
    // Fetch all products from the database
    const products = await productModel.find({});

    // Check if any products exist
    if (!products.length) {
      return res.json({ success: false, message: "No products found" });
    }

    // Send a success response with the list of products
    res.json({ success: true, products });
  } catch (error) {
    console.error(error);

    // Catch and respond with any unexpected errors
    res.json({ success: false, message: error.message });
  }
};


const getProductById = async (req, res) => {
  try {
    const { productId } = req.body; 
    const product = await productModel.findById(productId);

    if (!product) {
      return res.json({ success: false, message: "Product not found" });
    }

    res.json({ success: true, product });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.message });
  }
};


export { createProduct, deleteProduct, getAllProduct, getProductById };
