import express from "express";
import { createUser, getProfile, login } from "../controllers/userController.js"
import { authToken } from "../middlewares/authToken.js";

export const userRouter = express.Router();

userRouter.post("/users/signin", createUser);
userRouter.post("/users/login", login);

userRouter.get("/users/profile", authToken, getProfile);