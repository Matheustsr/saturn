import { getCustomRepository } from 'typeorm';
import UserRepositories from '../repositories/UserRepositories';
import {hash} from "bcryptjs";

interface IUUserRequest {
    name: string;
    email: string;
    admin?: boolean;
    password: string;
}
class CreateUserService {
    async execute({ name, email, admin, password }: IUUserRequest) {
        const usersRepository = getCustomRepository(UserRepositories);

        if(!email){ // check if contains email
            throw new Error('Email incorrect!');
        }

        const userAlreadyExists = await usersRepository.findOne({ email });

        if (userAlreadyExists) { // check if email exists
            throw new Error('User already exists!');
        }

        const passwordHash = await hash(password, 8)


        const user = usersRepository.create({name, email, admin, password: passwordHash});

        await usersRepository.save(user)

        return user;
    }
}
export default CreateUserService;
