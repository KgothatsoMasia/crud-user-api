import { Router } from "express";
import { v4 as uuidv4 } from 'uuid';


const userRouter = Router();

let users = [];

userRouter.get('/', (req, res) => {res.send(users)});

userRouter.post('/', (req, res) =>{

    const user = req.body;

    users.push({...user, id: uuidv4()});

    res.send(`User with the name ${user.firstName} has been added to the database`);
});

userRouter.get('/:id', (req, res) => {

    const { id } = req.params;

    const findUser = users.find((user) => user.id == id);

    res.send(findUser);

    res.send(req.params)
});

userRouter.delete('/:id', (req, res) => {

    const { id } = req.params;

    users = users.filter((user) => user.id !== id);

    res.send(`User with the id ${id} is deleted from the database`)
});

userRouter.patch('/:id', (req, res) => {

    const { id } = req.params;

    const { firstName, lastName, age } = req.body;

    const editUser = users.find((user) => user.id == id);

    if (firstName) editUser.firstName = firstName;
    if (lastName) editUser.lastName = lastName;
    if (age) editUser.age = age;

    res.send(`user with id ${id} is updated`);

});

export default userRouter;