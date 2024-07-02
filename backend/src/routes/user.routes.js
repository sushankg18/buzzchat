import express from 'express'
import {registerUser , loginUser, logoutUser, getOtherUsers} from '../controller/user.controller.js'
import { isAuthenticated } from '../middlewares/isAuthenticated.middlewares.js';
const router = express.Router()

router.route('/register').post(registerUser);
router.route('/login').post(loginUser)
router.route('/logout').get(logoutUser)
router.route('/').get(isAuthenticated,getOtherUsers)


export default router