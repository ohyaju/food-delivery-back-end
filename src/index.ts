import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { foodRouter } from "./routes/food";
import { connection } from "./utils/connection";
import { categoryRouter } from "./routes/category";

dotenv.config();

const PORT = 8000;
const app = express();
app.use(express.json());


app.use("/api/v1/food", foodRouter);
app.use("/api/v1/category", categoryRouter);
 
let count = 0;
app.get ("/",(req,res)=>{
    console.log(req, count++);

    res.send("buuz");
});
 app.listen(PORT, async () => {
        await connection();
        console.log(`Server is running http://localhost: ${PORT}`);

    });


