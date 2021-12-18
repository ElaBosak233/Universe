import express, {Request, Response} from "express";

const app = express();

app.all('/getJSON', (req: Request, res: Response) => {
    res.json({ data: 'data' })
})

export default app;