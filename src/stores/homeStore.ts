import { setToast } from '@tools/tools';
import homeService from '../apis/home.service';

class HomeStore {

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
            // const res = await homeService.getCover(curId, position);
            // runInAction(() => {
            //     this.coverUrl = res.data.url;
            //     window.localStorage.setItem('cover_id', res.data._id);
            // });
            // if (this.coverUrl) {
                // this.loadBgImg(this.coverUrl);
            // }
        } catch (e) {
            setToast('获取 Cover 失败');
        }
    }
}

const homeStore = new HomeStore();
export default homeStore;