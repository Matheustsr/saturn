import {Request, Response} from 'express';
import CreateTagService from '../services/CreateTagService';


class CreateTagController {

    async handle(req: Request, res: Response){

        const { name } = req.body
        const createtagService = new CreateTagService();
        const tag = await createtagService.execute({ name });
        return res.json(tag);

    }
}

export default CreateTagController;
