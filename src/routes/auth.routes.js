import {Router} from 'express'
import { verify } from 'jsonwebtoken'
const router = Router()

import * as authController from '../controllers/auth.controller'
import {verifySignUp} from '../middlewares'

router.post(
    '/signup',
    [verifySignUp.checkDuplicateUserNameOrEmail, verifySignUp.checkRolesExisted],
    authController.signUp
)
router.post('/signin', authController.signIn)

export default router