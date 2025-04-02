"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const PORT = 8000;
const app = (0, express_1.default)();
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
];
app.get("/", (_req, res) => {
    res.json({ msg: "hello" });
});
app.post("/food", (request, responce) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(request.body);
    responce.json({ success: true });
}));
app.get("/", (_req, res) => {
    res.json({ success: true, users });
});
app.listen(PORT, () => {
    console.log(`Server is running http://localhost ${PORT}`);
});
//# sourceMappingURL=index.js.map