const jwt = require("jsonwebtoken");
const User = require("../models/users");
require("dotenv").config();

// authentication middleware
const authenticate = async (req, res, next) => {
  let token;
  // checking for token in headers
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    // checking the validity of token
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, "secret");
      req.user = await User.findById(decoded.userId);
      next();
    } catch (error) {
      res
        .status(401)
        .json({ error: error, message: "Not authorized, token failed" });
    }
  }

  if (!token) {
    res.status(401).json({ error: "No token" });
  }
};

module.exports = authenticate;
