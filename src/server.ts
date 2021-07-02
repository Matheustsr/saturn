import express, {Request, Response, NextFunction} from 'express';
import 'express-async-errors'
import 'reflect-metadata';
import router from './routes';


import './database';

const app = express();
app.use(express.json());

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if(err instanceof Error){ // verifica se é do tipo Error
        return res.status(400).json({error: err.message})
    } // captura qualquer tipo de erro
    return res.status(500).json({status: 'error'})
})

app.use(router);

app.listen(3005, () => console.log('Rock time!'));
