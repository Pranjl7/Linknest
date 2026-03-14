import jwt from "jsonwebtoken";
import { User } from "../model/Usermodel.js";
const JWT_SECRET = process.env.JWT_SECRET;

const UserAuth = (req, res, next) => {
  try {
    // @ts-ignore
    const token = req.cookies.token;
    jwt.verify(token, JWT_SECRET!, (err, decoded) => {
      if (err) {
        res.status(404).json({
          success: false,
          message: "Signin Required.",
        });
        return;
      }

      User.findOne({ username: decoded }).then((user) => {
        if (user) {
          req.userid = decoded;
          next();
        } else {
          res.status(404).json({
            success: false,
            message: "Signin Required.",
          });
        }
      });
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong, plz try again.",
    });
  }
};

export default UserAuth;
