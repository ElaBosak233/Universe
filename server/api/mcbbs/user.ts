import express, {Request, Response} from "express";
import axios from "axios";
import cheerio from "cheerio";

const user: express.Router = express.Router();

let joinedGroup = []

/*
    /?uid=<uid> 获取指定 uid 用户的信息
 */
user.get('/', function (req: any, res: any) {
    axios.get(`https://www.mcbbs.net/home.php?uid=${req["query"]["uid"]}`, { 'content-type': 'text/html; charset=UTF-8', 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:87.0) Gecko/20100101 Firefox/87.0' }).then((response:any) => {
        let $ = cheerio.load(response.data);
        const stats = $('#psts .pf_l').text().split('\n')
        /*
            获取已加入的群组
         */
        let joinedGroup: any[] = [];
        $('div.pbm.mbm.bbda.cl').find('a[href*="group-"]').each((index:number, element:any) => {
            let first = $('div.pbm.mbm.bbda.cl').find('a[href*="group-"]').first()
            joinedGroup[index] = first.next().text();
            const long = joinedGroup.length;
            for (let i=0; i<long; i++) {
                joinedGroup[i] = first.text();
                first = first.next();
            }
        });
        /*
            发送数据
         */
        res.send({
            'title': {
                'name': $('h2.mt').text().split('\n')[1],
                'avatar': $('div.icn.avt a').find('img').attr('src').split('/small')[0],
                'link': $('div.h.cl p').find('a.xg1').attr('href')
            },
            'active': {
                'UserGroup': $('em.xg1').filter((index:number) => {
                    return $('em.xg1').text().trim().split(/\s+/)[index] === '用户组';
                }).next().text()
            },
            'joinedGroup': joinedGroup,
            'stats': {
                'Score': stats[2].split('人气')[0].split('积分')[1],
                'Popularity': stats[2].split('人气')[1].split('点')[0].split(' ')[0],
                'GoldenGrain': stats[3].split('金粒')[1].split('粒')[0],
                'Emerald': stats[5].split('宝石')[1].split('颗')[0],
                'NetherStar': stats[6].split('下界之星')[1].split('枚')[0],
                'Contribution': stats[7].split('贡献')[1].split('份')[0],
                'Love': stats[8].split('爱心')[1].split('心')[0],
                'Diamond': stats[9].split('钻石')[1].split('颗')[0]
            }
        })
    });
});

/*
    //getUserGroup?uid=<uid> 获取指定 uid 用户的用户组
 */
user.get('//getUserGroup', function (req: any, res: any) {
    axios.get(`https://www.mcbbs.net/home.php?uid=${req["query"]["uid"]}`, { 'content-type': 'text/html; charset=UTF-8', 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:87.0) Gecko/20100101 Firefox/87.0' }).then((response:any) => {
        let $ = cheerio.load(response.data);
        const data = $('em.xg1').filter((index:number) => {
            return $('em.xg1').text().trim().split(/\s+/)[index] === '用户组';
        }).next().text();
        res.send(data)
    });
});

/*
    //getJoinedGroup?uid=<uid> 获取指定 uid 用户加入的群组
 */
user.get('//getJoinedGroup', function (req: any, res: any) {
    let result: any[] = [];
    axios.get(`https://www.mcbbs.net/home.php?uid=${req["query"]["uid"]}`, { 'content-type': 'text/html; charset=UTF-8', 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:87.0) Gecko/20100101 Firefox/87.0' }).then((response:any) => {
        let $ = cheerio.load(response.data);
        $('div.pbm.mbm.bbda.cl').find('a[href*="group-"]').each((index:number, element:any) => {
            let first = $('div.pbm.mbm.bbda.cl').find('a[href*="group-"]').first()
            result[index] = first.next().text();
            const long = result.length;
            for (let i=0; i<long; i++) {
                result[i] = first.text();
                first = first.next();
            }
        });
        res.send(result);
    });
});

/*
    //getPoints?uid=<uid> 获取指定 uid 用户的积分
 */
user.get('//getScore', function (req: any, res: any) {
    axios.get(`https://www.mcbbs.net/home.php?uid=${req["query"]["uid"]}`, { 'content-type': 'text/html; charset=UTF-8', 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:87.0) Gecko/20100101 Firefox/87.0' }).then((response:any) => {
        let $ = cheerio.load(response.data);
        const list = $('#psts .pf_l').text().split('\n')
        res.send(list[2].split('人气')[0].split('积分')[1])
    });
});

/*
    //getPopularity?uid=<uid> 获取指定 uid 用户的人气
 */
user.get('//getPopularity', function (req: any, res: any) {
    axios.get(`https://www.mcbbs.net/home.php?uid=${req["query"]["uid"]}`, { 'content-type': 'text/html; charset=UTF-8', 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:87.0) Gecko/20100101 Firefox/87.0' }).then((response:any) => {
        let $ = cheerio.load(response.data);
        const list = $('#psts .pf_l').text().split('\n')
        res.send(list[2].split('人气')[1].split('点')[0].split(' ')[0]);
    });
});

/*
    //getGoldenGrain?uid=<uid> 获取指定 uid 用户的金粒
 */
user.get('//getGoldenGrain', function (req: any, res: any) {
    axios.get(`https://www.mcbbs.net/home.php?uid=${req["query"]["uid"]}`, { 'content-type': 'text/html; charset=UTF-8', 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:87.0) Gecko/20100101 Firefox/87.0' }).then((response:any) => {
        let $ = cheerio.load(response.data);
        const list = $('#psts .pf_l').text().split('\n')
        res.send(list[3].split('金粒')[1].split('粒')[0]);
    });
});

/*
    //getEmerald?uid=<uid> 获取指定 uid 用户的宝石
 */
user.get('//getEmerald', function (req: any, res: any) {
    axios.get(`https://www.mcbbs.net/home.php?uid=${req["query"]["uid"]}`, { 'content-type': 'text/html; charset=UTF-8', 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:87.0) Gecko/20100101 Firefox/87.0' }).then((response:any) => {
        let $ = cheerio.load(response.data);
        const list = $('#psts .pf_l').text().split('\n')
        res.send(list[5].split('宝石')[1].split('颗')[0]);
    });
});

/*
    //getNetherStar?uid=<uid> 获取指定 uid 用户的下界之星
 */
user.get('//getNetherStar', function (req: any, res: any) {
    axios.get(`https://www.mcbbs.net/home.php?uid=${req["query"]["uid"]}`, { 'content-type': 'text/html; charset=UTF-8', 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:87.0) Gecko/20100101 Firefox/87.0' }).then((response:any) => {
        let $ = cheerio.load(response.data);
        const list = $('#psts .pf_l').text().split('\n')
        res.send(list[6].split('下界之星')[1].split('枚')[0]);
    });
});

/*
    //getContribution?uid=<uid> 获取指定 uid 用户的贡献
 */
user.get('//getContribution', function (req: any, res: any) {
    axios.get(`https://www.mcbbs.net/home.php?uid=${req["query"]["uid"]}`, { 'content-type': 'text/html; charset=UTF-8', 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:87.0) Gecko/20100101 Firefox/87.0' }).then((response:any) => {
        let $ = cheerio.load(response.data);
        const list = $('#psts .pf_l').text().split('\n')
        res.send(list[7].split('贡献')[1].split('份')[0]);
    });
});

/*
    //getLove?uid=<uid> 获取指定 uid 用户的爱心
 */
user.get('//getLove', function (req: any, res: any) {
    axios.get(`https://www.mcbbs.net/home.php?uid=${req["query"]["uid"]}`, { 'content-type': 'text/html; charset=UTF-8', 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:87.0) Gecko/20100101 Firefox/87.0' }).then((response:any) => {
        let $ = cheerio.load(response.data);
        const list = $('#psts .pf_l').text().split('\n')
        res.send(list[8].split('爱心')[1].split('心')[0]);
    });
});

/*
    //getDiamond?uid=<uid> 获取指定 uid 用户的钻石
 */
user.get('//getDiamond', function (req: any, res: any) {
    axios.get(`https://www.mcbbs.net/home.php?uid=${req["query"]["uid"]}`, { 'content-type': 'text/html; charset=UTF-8', 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:87.0) Gecko/20100101 Firefox/87.0' }).then((response:any) => {
        let $ = cheerio.load(response.data);
        const list = $('#psts .pf_l').text().split('\n')
        res.send(list[9].split('钻石')[1].split('颗')[0]);
    });
});


export default user;