import { observable, runInAction } from 'mobx';
import { setToast } from '@tools/tools';
import { webpSuffix } from '../constants/constants';
import homeService from '../apis/home.service';
import { Project } from '../types/home';

class HomeStore {

    @observable public coverUrl: string = '';
    @observable public projects: Project[] = [];

    /**
     * 加载背景图片
     * @memberof HomeStore
     */
    public loadBgImg = (imageUrl: string) => {
        const isWebp = window.localStorage.getItem('isWebp') === 'true';
        const backgroundDom = document.getElementById('background');
        const background = new Image();
        background.src = isWebp ? `${imageUrl}${webpSuffix}` : imageUrl;
        background.onload = () => {
            if (backgroundDom) {
                backgroundDom.style.cssText = `opacity: 1; background-image: url(${background.src})`;
            }
        }
    }

    /**
     * 获取封面
     * @memberof HomeStore
     */
    public getCover = async (position: string) => {
        let curId = window.localStorage.cover_id;
        if (!curId) {
            curId = 0;
        }
        try {
            const res = await homeService.getCover(curId, position);
            runInAction(() => {
                this.coverUrl = res.data.url;
                window.localStorage.setItem('cover_id', res.data._id);
            });
            if (this.coverUrl) {
                this.loadBgImg(this.coverUrl);
            }
        } catch (e) {
            setToast('获取 Cover 失败');
        }
    }

    public getProject = async () => {
        try {
            const res = await homeService.getProject();
            runInAction(() => {
                this.projects = res.data;
            })
        } catch (e) {
            setToast('获取 Projects 失败');
        }
    }
}

const homeStore = new HomeStore();
export default homeStore;