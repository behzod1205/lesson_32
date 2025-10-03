import express from "express";
import MainRouter from "./routes/Main.routes.js";

const app = express();

app.use(express.json());
app.use(MainRouter)

const PORT = process.env.PORT || 3434;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
