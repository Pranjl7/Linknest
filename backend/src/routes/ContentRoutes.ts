import express, {Router} from "express";
import UserAuth from "../middleware/UserAuth.js";
const router: Router = express.Router();

import { viewcontent, viewspecificcontent, createcontent, deletecontent } from "../controller/ContentController.js";

router.get("/", viewcontent);

router.get("/:contentid", viewspecificcontent)

router.post('/create', UserAuth, createcontent);

router.delete('/delete/:title', UserAuth, deletecontent);

export default router