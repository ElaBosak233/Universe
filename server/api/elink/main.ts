import express, {Request, Response} from "express";
import axios from "axios";
import * as cheerio from "cheerio";

const elink: express.Router = express.Router();

const headers = {
    "accept": "*/*",
    "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
    "referrer": "https://live.bilibili.com",
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.106 Safari/537.36',
}

elink.get("/", (req: Request, res: Response) => {
    res.send("eLink API");
});

elink.get("/:id", (req: Request, res: Response) => {
    axios.get(`https://live.bilibili.com/${req.params.id}`, {headers}).then((response: any) => {
    let $ = cheerio.load(response.data);
    res.send($("header-info").html());
});
});

export default elink;