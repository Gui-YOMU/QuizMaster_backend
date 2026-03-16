import "dotenv/config";
import express from "express";
import cors from "cors";

const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({message: "Bienvenue."});
})

app.listen(PORT, (error) => {
    if (error) {
        console.error(error);
    } else {
        console.log(`Connecté avec succcès au serveur localhost:${PORT}.`);
    }
})