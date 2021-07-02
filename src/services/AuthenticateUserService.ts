import bcrypt, {compare} from 'bcryptjs';
import { getCustomRepository } from 'typeorm';
import UserRepositories from '../repositories/UserRepositories';
import { sign } from 'jsonwebtoken'

import auth from '../config/auth'

interface IAuthenticateRequest{
    email: string,
    password: string
}

class AuthenticateUserService{


   async execute({email, password}: IAuthenticateRequest){
    const usersRepository = getCustomRepository(UserRepositories);
    const user = await usersRepository.findOne({ email });


    if(!user){
        throw new Error('User/password incorrect!');
    }

    const passwordMatch = await compare(password, user.password)

    if(!passwordMatch){
        throw new Error('User/password incorrect!');
    }
    const token = sign({email: user.email}, auth.secret, {subject: user.id, expiresIn: auth.expiresIn});
    return token;
   }

}

export default AuthenticateUserService;
