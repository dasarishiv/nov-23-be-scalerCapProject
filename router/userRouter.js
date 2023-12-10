const express = require("express");
const { getUserByIdHandler, getUserHandler, createUserHandler, deleteUserByIdHandler, updateUserByIdHandler, forgetPassword, resetPassword } = require("../controller/userController");
const { checkInput } = require("../utils/crudFactory");
const { reset } = require("nodemon");

const userRouter = express.Router();



userRouter.get('/', getUserHandler)
userRouter.post('/', checkInput, createUserHandler)
userRouter.post('/forgetPassword',forgetPassword)
userRouter.patch('/resetPassword/:userId',resetPassword)
userRouter.get('/:id', getUserByIdHandler)
userRouter.patch('/:id', updateUserByIdHandler)
userRouter.delete('/:id', deleteUserByIdHandler)

module.exports = userRouter;