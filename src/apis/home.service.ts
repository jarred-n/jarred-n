import { GET } from '../tools/axios';
import { AxiosResponse } from 'axios'
import { Cover } from '../types/home';

class HomeService {
    public getCover(curId: string, position: string): Promise<AxiosResponse<Cover>> {
        return GET(`/covers/${curId}?position=${position}`, null, '');
    }
}

const homeService = new HomeService();

export default homeService;
