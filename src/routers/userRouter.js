import express from "express";
import { createUser, login } from "../controllers/userController.js";
import { authToken } from "../middlewares/authToken.js";

export const userRouter = express.Router();

userRouter.post("/users", createUser);
userRouter.post("/users/login", login);

userRouter.get("/users/profile", authToken);