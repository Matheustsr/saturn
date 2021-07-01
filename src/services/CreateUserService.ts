import UserRepositories from '../repositories/UserRepositories';

interface IUUserRequest {
    name: string;
    email: string;
    admin?: boolean;
}
class CreateUserService {
    async execute({ name, email, admin }: IUUserRequest) {
        const usersRepository = new UserRepositories();

        if(!email){
            throw new Error('Email incorrect!');
        }

        const userAlreadyExists = await usersRepository.findOne({ email });

        if (userAlreadyExists) {
            throw new Error('User already exists!');
        }

        const user = usersRepository.create({name, email, admin});

        await usersRepository.save(user)

        return user;
    }
}
export default CreateUserService;
