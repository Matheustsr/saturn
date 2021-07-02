import { getCustomRepository } from "typeorm";
import TagRepositories from "../repositories/TagRepositories";

class CreateTagService {
    async execute(name) {
        const tagRepositories = getCustomRepository(TagRepositories);


        const tagAlreadyExists = await tagRepositories.findOne({ name });

        if(!name){
            throw new Error('Name invalid!');
        }

        if (tagAlreadyExists) { // check if TAG exists
            throw new Error('Tag already exists!');
        }


        const tag = tagRepositories.create({name});

        await tagRepositories.save(tag)

        return tag;
    }
}

export default CreateTagService;
