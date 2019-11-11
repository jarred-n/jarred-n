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
        this.total = 10;
        try {
            const res = await articleService.getPostsByPage(page);
            runInAction(() => {
                this.posts = res.data;
                this.total = parseInt(res.headers.amount, 10);
            })
        } catch (e) {
            setToast(`获取第${page}页失败`);
        } finally {
            this.isSummaryLoading = false;
        }
    }
}

const articleStore = new ArticleStore();
export default articleStore;