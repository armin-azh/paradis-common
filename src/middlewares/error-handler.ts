import { Request, Response, NextFunction } from 'express';
import {CustomError} from "../errors/custom-error";

export const errorHandler = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
)=>{
    if (err instanceof CustomError){
        // @ts-ignore
        return res.status(err.statusCode).send({errors: err.serializeErrors()});
    }
    // @ts-ignore
    res.status(400).send({
        errors: [{message: 'Something went wrong!'}]
    });
};