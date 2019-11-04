import { observable, runInAction } from 'mobx';
import { ArticleDetail } from '../types/article';
import { setToast } from '../tools/tools';
import articleService from '../apis/article.service';

class ArticleStore {
    @observable public posts: ArticleDetail[] = [];
    @observable public isSummaryLoading: boolean = false;
    @observable public total: number = 0;


    public getPostsByPage = async (page: number) => {
        this.isSummaryLoading = true;
        this.posts = [{
            "content": "",
            "like_count": ["220.202.152.119", "185.189.112.77", "111.196.244.225", "111.196.240.64", "113.246.105.183", "113.116.119.135", "111.198.58.50", "122.96.40.100", "123.118.75.152", "114.230.107.45", "119.254.252.189"],
            "pv_count": 368,
            "tags": ["HTTP", "面试"],
            "_id": "5ccfd143f84fe93e3f5fa38a",
            "header_cover": "//yancey-assets.oss-cn-beijing.aliyuncs.com/HTTP_logo.png",
            "title": "[HTTP 系列] 第 2 篇 —— HTTP 协议那些事",
            "summary": "这里是《写给前端工程师的 HTTP 系列》，记得有位大佬曾经说过：“大厂前端面试对 HTTP 的要求比 CSS 还要高”，由此可见 HTTP 的重要程度不可小视。文章写作计划如下，视情况可能有一定的删减，本篇是该系列的第 2 篇 —— 《HTTP 协议那些事》。这篇文章会涉及到 HTTP 协议，cookie 和 session，HTTP 首部/方法/状态码等。",
            "publish_date": "2019-05-06T06:16:35.566Z",
            "last_modified_date": "2019-11-03T04:03:54.216Z",
        }, {
            "content": "",
            "like_count": ["58.250.23.228", "185.189.112.77", "185.189.112.79", "111.196.244.225", "111.196.240.64", "113.92.73.110"],
            "pv_count": 155,
            "tags": ["HTTP", "面试"],
            "_id": "5cc548b9ec9b0f4eac134683",
            "header_cover": "//yancey-assets.oss-cn-beijing.aliyuncs.com/maxresdefault.jpg",
            "title": "[HTTP 系列] 第 1 篇 —— 从 TCP/UDP 到 DNS 解析",
            "summary": "这里是《写给前端工程师的 HTTP 系列》，记得有位大佬曾经说过：“大厂前端面试对 HTTP 的要求比 CSS 还要高”，由此可见 HTTP 的重要程度不可小视。文章写作计划如下，视情况可能有一定的删减，本篇是该系列的第 1 篇 —— 《从 TCP/UDP 到 DNS 解析》。",
           
            "publish_date": "2019-04-28T06:31:21.787Z",
            "last_modified_date": "2019-11-03T03:36:21.309Z",
        }, {
            "content": "",
            "like_count": ["115.193.131.18", "202.239.38.244", "", "185.189.112.77", "111.196.244.225", "111.196.245.111", "114.249.132.31"],
            "pv_count": 211,
            "tags": ["JavaScript", "Event Loop", "面试", "Promise"],
            "_id": "5cbc0ad8ec9b0f4eac13467e",
            "header_cover": "//yancey-assets.oss-cn-beijing.aliyuncs.com/1_NCg5QdEcwVXLnZQ6AC-CNw.jpeg.jpg",
            "title": "最后一次搞懂 Event Loop",
            "summary": "Event Loop 是 JavaScript 异步编程的核心思想，也是前端进阶必须跨越的一关。同时，它又是面试的必考点，特别是在 Promise 出现之后，各种各样的面试题层出不穷，花样百出。这篇文章从现实生活中的例子入手，让你彻底理解 Event Loop 的原理和机制，并能游刃有余的解决此类面试题。",
           
            "publish_date": "2019-04-21T06:16:56.691Z",
            "last_modified_date": "2019-11-03T04:00:30.974Z",
        }, {
            "content": "",
            "like_count": ["185.189.112.77", "111.196.244.225", "111.196.241.135"],
            "pv_count": 100,
            "tags": ["Promise", "面试", "手写 Promise"],
            "_id": "5cb71843ec9b0f4eac13467c",
            "header_cover": "//yancey-assets.oss-cn-beijing.aliyuncs.com/promise.png",
            "title": "深入理解并手写遵循 Promise/A+ 规范的 Promise",
            "summary": "相比于回调函数，Promise 解决了 “回调地狱” 和 “信任问题” 等痛点，并且大大提高了代码的可读性。在现代前端开发中，Promise 几乎成了处理异步的首选（虽然还有更方便的 async/await，逃）。这篇文章从 Promise 的思想和运行机制入手，深入理解每个 API，最后手写一个遵循 Promise/A+ 规范的 Promise 来。",
           
            "publish_date": "2019-04-17T12:12:51.260Z",
            "last_modified_date": "2019-10-21T14:09:42.487Z",
        }, {
            "content": "",
            "like_count": ["106.37.209.130", "185.189.112.77"],
            "pv_count": 140,
            "tags": ["JavaScript", "面试", "继承"],
            "_id": "5caeef65d868ff4b49e2d61e",
            "header_cover": "//yancey-assets.oss-cn-beijing.aliyuncs.com/1_rt8J89LahYwwOuLOgA_TvA.jpeg",
            "title": "JavaScript 七大继承全解析",
            "summary": "继承作为基本功和面试必考点，必须要熟练掌握才行。小公司可能仅让你手写继承（一般写 `寄生组合式继承` 即可），大厂就得要求你全面分析各个继承的优缺点了。这篇文章深入浅出，让你全面了解 JavaScript 继承及其优缺点，以在寒冬中立于不败之地。",
           
            "publish_date": "2019-04-11T07:40:21.782Z",
            "last_modified_date": "2019-11-04T02:11:12.775Z",
        }, {
            "content": "",
            "like_count": ["58.250.23.228", "82.102.24.51", "185.189.112.77"],
            "pv_count": 159,
            "tags": ["JavaScript", "面试", "原型/原型链", "面向对象编程"],
            "_id": "5cac4d89d397224556c48941",
            "header_cover": "//yancey-assets.oss-cn-beijing.aliyuncs.com/1_BSxXLM3Yu3lWMRGezi33Ew.png",
            "title": "从感性角度学习原型/原型链",
            "summary": "最近在拜读 winter 大神的《重学前端》系列，果然是大佬的手笔，追本溯源，娓娓道来。感觉不仅是在重学前端，更是在学习一套方法论。这篇文章是对原型/原型链的一个总结，从生活实际入手，攻克 JavaScript 所谓最难理解的一部分。",
           
            "publish_date": "2019-04-09T07:45:13.184Z",
            "last_modified_date": "2019-11-04T02:18:35.543Z",
        }, {
            "content": "",
            "like_count": ["106.37.209.130", "104.225.153.200", "185.189.112.111", "185.189.112.77", "111.196.244.225", "111.196.240.64", "123.118.72.68"],
            "pv_count": 111,
            "tags": ["JavaScript", "面试", "作用域(链)", "闭包", "词法作用域"],
            "_id": "5caa0ca8d397224556c48940",
            "header_cover": "//yancey-assets.oss-cn-beijing.aliyuncs.com/javascript.jpg",
            "title": "从 JavaScript 编译原理到作用域(链)及闭包",
            "summary": "虽然作用域的相关知识是 JavaScript 的基础, 但要彻底理解必须要从原理入手. 从面试角度来讲, 词法/动态作用域、作用域(链)、变量/函数提升、闭包、垃圾回收 实属一类题目, 打通这几个概念并熟练掌握, 面试基本就不用担心这一块了. 这篇文章是对《JavaScript 高级程序设计 (第三版)》第四章, 同样也是 《你不知道的 JavaScript (上卷)》第一部分的学习和总结.",
           
            "publish_date": "2019-04-07T14:43:52.336Z",
            "last_modified_date": "2019-11-01T07:30:54.483Z"
        }, {
            "content": "",
            "like_count": ["111.196.244.225", "119.254.252.189"],
            "pv_count": 125,
            "tags": ["Music"],
            "_id": "5ca5c61ad397224556c4893f",
            "header_cover": "//yancey-assets.oss-cn-beijing.aliyuncs.com/x1080-Kna.jpg",
            "title": "なごり雪",
            "summary": "而現在春天來了，妳變得美麗了，比去年更加美麗了。",
           
            "publish_date": "2019-04-04T08:53:46.145Z",
            "last_modified_date": "2019-10-24T13:55:06.907Z"
        }];
        this.total = 10;
        // try {
        //     const res = await articleService.getPostsByPage(page);
        //     runInAction(() => {
        //         this.posts = res.data;
        //         this.total = parseInt(res.headers.amount, 10);
        //     })
        // } catch (e) {
        //     setToast(`获取第${page}页失败`);
        // } finally {
            this.isSummaryLoading = false;
        // }
    }
}

const articleStore = new ArticleStore();
export default articleStore;