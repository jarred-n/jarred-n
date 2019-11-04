import { GET } from '../tools/axios';
import { AxiosResponse } from 'axios'
import { Cover, Project } from '../types/home';

class HomeService {
    public getCover(curId: string, position: string): Promise<AxiosResponse<Cover>> {
        return GET(`/covers/${curId}?position=${position}`, null, '');
    }
    public getProject(): Promise<AxiosResponse<Project[]>> {
        return GET('/latestThreeProjects', null, '');
    }
}

const homeService = new HomeService();

export default homeService;
