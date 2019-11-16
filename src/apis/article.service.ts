import { GET } from '../tools/axios';
import { AxiosResponse } from 'axios';
import { ArticleDetail } from '../types/article';

class ArticleService {
    public getPostsByPage(page: number): Promise<AxiosResponse<ArticleDetail[]>> {
        return GET(`/articleList/page/${page}`, null, '');
    }
}

const articleService = new ArticleService();
export default articleService;