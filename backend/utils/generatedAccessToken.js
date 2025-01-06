import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

async function generatedAccessToken(userId) {
  const token = jwt.sign({ id: userId }, process.env.JWT_ACCESS_TOKEN_SECRET, {
    expiresIn: "5h",
  });
  return token;
}

export default generatedAccessToken;
