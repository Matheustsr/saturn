import { Request, Response, NextFunction } from 'express';

export function ensureAdmin(req: Request, res: Response, next: NextFunction){
    const admin = true;

    if(admin){
        return next();
    }

    return res.status(401).json({error: 'unauthorized'})
}
