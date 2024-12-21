import express from "express";
import cors from "cors";
import "dotenv/config"; // Load environment variables from the .env file
import connectDB from "./config/db.js"; // Import the database connection function
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

// App configuration
const app = express();
const port = process.env.PORT || 4000;


// Middleware
app.use(express.json()); // Parse incoming requests with JSON payloads
app.use(cors()); // Enable CORS (Cross-Origin Resource Sharing)

// Connect to the database

connectDB()
connectCloudinary()

// API endpoints
app.use('/api/user',userRouter)
app.use('/api/product',productRouter)
app.use('/api/cart', cartRouter)
app.use('/api/order', orderRouter)

app.get('/', (req, res) => {
  res.send("API successfully connected");
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on address http://localhost:${port}`);
});