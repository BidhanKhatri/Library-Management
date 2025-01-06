import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const authMiddleware = (req, res, next) => {
  const token =
    req.cookies.accessToken || req?.headers?.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({
      msg: "Token is required",
      success: false,
      error: true,
    });
  }

  const decode = jwt.verify(token, process.env.JWT_ACCESS_TOKEN_SECRET);

  if (!decode) {
    return res.status(401).json({
      msg: "Unauthorized Access",
      success: false,
      error: true,
    });
  }

  req.userId = decode.id;
  next();
};

export default authMiddleware;
