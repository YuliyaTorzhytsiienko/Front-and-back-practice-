import express from "express";
import morgan from "morgan";
import cors from "cors";

const app = express();

app.use(morgan("tine"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res) => {
    const personData = {
        name: "Yuliya",
        isInstructur: false,
    };
    console.log(req.body);
    return res.json(personData);
});

app.listen(4000, () => console.log("server is listening at the port 4000"));
