import jwt from 'jsonwebtoken';

const adminAuth = async (req, res, next) => {
  try {
    // Extract token from the header
    const { token } = req.headers;

    if (!token) {
      return res.json({ success: false, message: "Not Authorized, please login again" });
    }

    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Check if the decoded email matches the admin email
    if (decoded.email !== process.env.ADMIN_EMAIL) {
      return res.json({ success: false, message: "Not Authorized, please login again" });
    }

    // If everything is fine, continue to the next middleware
    next();
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.message || "Something went wrong" });
  }
};

export default adminAuth;
