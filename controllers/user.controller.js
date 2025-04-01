import { v4 as uuidv4 } from 'uuid';

let users = [];

export const allUsers = (req, res) => {res.send({users})};

export const createUser = (req, res) =>{

    const user = req.body;

    users.push({...user, id: uuidv4()});

    res.send(`User with the name ${user.firstName} has been added to the database`);
};

export const locateUser = (req, res) => {

    const { id } = req.params;

    const findUser = users.find((user) => user.id == id);

    res.send(findUser);

    res.send(req.params)
};

export const removeUser = (req, res) => {

    const { id } = req.params;

    users = users.filter((user) => user.id !== id);

    res.send(`User with the id ${id} is deleted from the database`)
};

export const editUserInfo = (req, res) => {

    const { id } = req.params;

    const { firstName, lastName, age } = req.body;

    const editUser = users.find((user) => user.id == id);

    if (firstName) editUser.firstName = firstName;
    if (lastName) editUser.lastName = lastName;
    if (age) editUser.age = age;

    res.send(`user with id ${id} is updated`);

};