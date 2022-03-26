import express, {Request, Response} from "express";

const app: express.Application = express();

const router: express.Router = express.Router();

router.get("/", (req: Request, res: Response) => {
    res.send("It works!");
});

/**
 * 载入所需模块
 */
import elink from "./elink/main";
app.use("/elink", elink);
import mcbbs from "./mcbbs/main";
app.use("/mcbbs", mcbbs);
app.use("/", router);

export default app;