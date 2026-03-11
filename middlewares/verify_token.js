import jwt from "jsonwebtoken";
import BlackList from "../models/blackListerToken.js";

export const verifyToken = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).send({ msg: "Authorization token is required" });
    }
    
    let token = authHeader.split(" ")[1];
    let findBlock = await BlackList.findOne({ token: token });
    if (findBlock) {
      return res.status(401).send({ msg: "You are already logged out" });
    }
    
    jwt.verify(token, process.env.JWT_SECRET || process.env.SECRET_KEY, (err, decoded) => {
      if (err) {
        return res
          .status(401)
          .send({ msg: "You're not authenticated person", Error: err.message });
      }

      console.log(decoded);
      req.user = decoded;
      next();
    });
  } catch (error) {
    return res.status(500).send({ msg: "Server error", error: error.message });
  }
};
