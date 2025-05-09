import { Router } from 'express';

const authRouter = Router();

authRouter.post("/signup", signUpUser);


export default authRouter