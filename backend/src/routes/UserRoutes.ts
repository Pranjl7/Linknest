import express, {Router} from "express";
import UserAuth from "../middleware/UserAuth.js";
const router: Router = express.Router();

import { usersignup, usersignin } from "../controller/UserController.js";

router.post("/signup", usersignup);

router.post("/signin", usersignin);

export default router