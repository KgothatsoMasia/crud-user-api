import { Router } from "express";
import
 { 
    allUsers,
    createUser,
    editUserInfo,
    locateUser,
    removeUser 
} from "../controllers/user.controller.js";


const userRouter = Router();

userRouter.get('/', allUsers);

userRouter.post('/', createUser);

userRouter.get('/:id', locateUser);

userRouter.delete('/:id', removeUser);

userRouter.patch('/:id', editUserInfo);

export default userRouter;