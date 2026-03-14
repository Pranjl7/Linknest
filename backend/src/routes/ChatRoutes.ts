import express, {Router} from 'express'
import UserAuth from '../middleware/UserAuth.js'
const router: Router = express.Router()

import { userchat } from '../controller/ChatController.js'

router.post("/", userchat)

export default router