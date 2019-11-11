import { GET } from '../tools/axios';
import { AxiosResponse } from 'axios'
import { Cover, Project, Announcement, Motto } from '../types/home';

class HomeService {
    public getCover(curId: string, position: string): Promise<AxiosResponse<Cover>> {
        console.log('curId', curId);
        return GET(`/covers/${curId}?position=${position}`, null, '');
    }
    public getProject(): Promise<AxiosResponse<Project[]>> {
        return GET('/latestThreeProjects', null, '');
    }

    public getMotto(): Promise<AxiosResponse<Motto>> {
        return GET('/latestMotto', null, '');
    }

    public getAnnouncement(): Promise<AxiosResponse<Announcement>> {
        return GET('/latestAnnouncements', null, '');
    }

}

const homeService = new HomeService();

export default homeService;
