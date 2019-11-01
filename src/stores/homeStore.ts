import { setToast } from '@tools/tools';

class HomeStore {
 
    /**
     * 获取封面
     * @memberof HomeStore
     */
    public getCover  = async (position: string) => {
        let curId = window.localStorage.cover_id;
        if(!curId) {
            curId = 0;
        }
        try {
            const res = await home
        } catch (e) {
            setToast('获取 Cover 失败');
        }
    }
}

const homeStore = new HomeStore();
export default homeStore;