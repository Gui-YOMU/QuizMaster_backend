import "dotenv/config";
import express from "express";
import cors from "cors";
import { answerRouter } from "./routers/answerRouter.js";
import { itemRouter } from "./routers/itemRouter.js";
import { userRouter } from "./routers/userRouter.js";
import { quizRouter } from "./routers/quizRouter.js";
import { questionRouter } from "./routers/questionRouter.js";
import { roomRouter } from "./routers/roomRouter.js";
import { teamRouter } from "./routers/teamRouter.js";
import { teamToQuestionRouter } from "./routers/teamToQuestionRouter.js";

const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ page: "login" });
});

app.use(userRouter);
app.use(quizRouter);
app.use(questionRouter);
app.use(answerRouter);
app.use(itemRouter);
app.use(roomRouter);
app.use(teamRouter);
app.use(teamToQuestionRouter);

app.listen(PORT, (error) => {
  error
    ? console.error(error)
    : console.log(`Connecté avec succcès au serveur localhost:${PORT}.`);
});
