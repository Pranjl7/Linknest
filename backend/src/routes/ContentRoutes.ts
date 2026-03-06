import express, {Router} from "express";
import UserAuth from "../middleware/UserAuth.js";
const router: Router = express.Router();

import { viewcontent, viewspecificcontent, createcontent } from "../controller/ContentController.js";

router.get("/", viewcontent);

router.get("/:contentid", viewspecificcontent)

router.post('/create', UserAuth, createcontent);

export default router