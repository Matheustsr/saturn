import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import authConfig from '../config/auth';
import AuthenticateUserService from '../services/AuthenticateUserService';
import User from '../services/CreateUserService';

class AuthenticateUserController {
    async handle(req: Request, res: Response){
        const { email, password } = req.body;
        const authenticateUserService = new AuthenticateUserService()

        const token = await authenticateUserService.execute({email, password})
        return res.json(token)
    }
}

export default AuthenticateUserController;
