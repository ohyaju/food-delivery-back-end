import express, { Request, Response } from "express";

const PORT = 8000;
const app = express();

app.use(express.json())

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

app.get("/", (_req: Request, res: Response) => {
    res.json({ msg: "hello" });
});

app.get("/users", (_req: Request, res: Response) => {
    res.json({ success: true, users });
});

interface UserParams {
    id: string;
}

interface User {
    _id: number;
    name: string;
    age: number;
    tags: string[];
}
interface UserResponse {
    success: boolean;
    users?: User []| User;
    message?: string;
}
app.get(
    "/users/:id",
    (req: Request<UserParams>, res: Response<UserResponse>) => {
        const { id } = req.params;     //Задалж авах

        const user = users.find((user) => user._id === Number(id));  //filter array буцаадаг, find object буцаадаг

        res.json({ success: true, users });
    });

app.put(
    "/users/:id",
    (req: Request<UserParams>, res: Response<UserResponse>) => {
        const { id } = req.params;     //Задалж авах
        console.log(req.body);
        users.filter((user) => {
            if (user._id === Number(id)) { //filter array буцаадаг, find object буцаадаг
                const updatedUser = { ...user, ...req.body };
                user=updatedUser;
            }
        });
       
    });


app.listen(PORT, () => {
    console.log(`Server is running http://localhost ${PORT}`);
});