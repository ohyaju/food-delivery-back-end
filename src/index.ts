import express, { Application, request, Request, Response } from "express";
import cors from "cors";

import { foodRouter } from "./routes/food";
import { connection } from "./utils/connection";

const PORT = 8000;
const app = express();
app.use(express.json());
app.use(cors());


app.use("/api/v1/food", foodRouter);


// app.post("/food", async (req, res) => {
//     const food = await Food.create(req.body);
//     res.json({ success: true, food });
// }); //энийг ч бас 



 app.listen(PORT, async () => {
        await connection();
        console.log(`Server is running http://localhost ${PORT}`);

    });

// interface UserParams {
//     id: string;
// }

// interface User {
//     _id: number;
//     name: string;
//     age: number;
//     tags: string[];
// }
// interface UserResponse {
//     success: boolean;
//     users?: User[] | User;
//     message?: string;
// }
// app.get(
//     "/users/:id",
//     (req: Request<UserParams>, res: Response<UserResponse>) => {
//         const { id } = req.params;     //Задалж авах

//         const user = users.find((user) => user._id === Number(id));  //filter array буцаадаг, find object буцаадаг

//         res.json({ success: true, users });
//     });

// app.put(
//     "/users/:id",
//     (req: Request<UserParams>, res: Response<UserResponse>) => {
//         const { id } = req.params;     //Задалж авах
//         console.log(req.body);
//         users.filter((user) => {
//             if (user._id === Number(id)) { //filter array буцаадаг, find object буцаадаг
//                 const updatedUser = { ...user, ...req.body };
//                 user = updatedUser;
//             }
//         });

//     });


// const users = [
//     {
//         _id: 1,
//         name: "doe",
//         age: 30,
//         tags: ["user", "admin"],
//     },
//     {
//         _id: 2,
//         name: "john",
//         age: 55,
//         tags: ["user", "admin"],
//     },
// ]

// app.get("/", (_req: Request, res: Response) => {
//     res.json({ msg: "hello" });
// });

// app.get("/users", (_req: Request, res: Response) => {
//     res.json({ success: true, users });
// });

// app.get("/foods", async (req, res) => {
//     const foods = await Food.find();

//     res.json({ success: true, foods });
// }); //энийг ашиглана