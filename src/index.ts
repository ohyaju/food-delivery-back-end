import express, { Express, Request, Response} from "express";

const PORT = 8000;
const app = express();


const users = [
    {
        _id: 1,
        name: "doe",
        age: 30,
        tags: ["user", "admin"],
    },
    {
        _id: 2,
        name: "john",
        age: 55,
        tags: ["user", "admin"],
    },
]

app.get("/",(_req:Request, res: Response)=>{
    res.json({msg: "hello"});
});
app.post("/food", async (request, responce)=>{
    console.log(request.body);
    responce.json({success: true})
});
app.get ("/",(_req: Request, res: Response)=>{
    res.json({success: true, users})
});

app.listen(PORT, () => {
    console.log(`Server is running http://localhost ${PORT}`);
});