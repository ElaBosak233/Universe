import express, {Request, Response} from "express";

const mcbbs: express.Router = express.Router();

mcbbs.get("/", (req: Request, res: Response) => {
    res.send("MCBBS API");
});

import user from "./user";
mcbbs.use("/user", user);

export default mcbbs;