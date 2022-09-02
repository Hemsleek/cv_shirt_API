/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */

import Users from './UsersModel';

export const login = async (req, res) => {
    const excludeFromResult = '-createdAt -updatedAt -__v -password';

    try {
        console.log('hereeee');
        const { email } = req.body;
        console.log(' two hereeee');

        const userExist = await Users.findOne({ email }, excludeFromResult);
        console.log({ userExist });
        if (!userExist) {
            return res.status(404).json({
                message: 'incorrect credentials',

            });
        }
        return res.json({
            message: 'login successful',
            payload: userExist,
        });
    } catch (err) {
        return res.status(500).send('internal server error');
    }
};

export const getAllUsers = async (req, res) => {
    const excludeFromResult = '-createdAt -updatedAt -__v';

    try {
        const allUsers = await Users.find({}, excludeFromResult);
        return res.json(allUsers);
    } catch (err) {
        return res.status(500).send('internal server error');
    }
};

export const createUser = async (req, res) => {
    const excludeFromResult = '-createdAt -updatedAt -__v -password';

    try {
        const { email, password, fullname } = req.body;
        const userExist = await Users.findOne({ email }, excludeFromResult);

        if (userExist) {
            return res.status(409).json({
                message: 'user already exist, login instead',

            });
        }
        const newUser = await new Users({ email, password, fullname }).save();

        return res.json({
            message: 'operation successful, proceed to login',
            payload: {
                fullname: newUser.fullname,
                email: newUser.email,
            },

        });
    } catch (err) {
        return res.status(500).send('internal server error');
    }
};
