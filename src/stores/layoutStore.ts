import { observable, runInAction } from "mobx";
import { APlayer, GlobalStatus } from '../types/layout';
import _APlayer from 'aplayer';

import {
    setToast
} from '@tools/tools';
import layoutsService from "../apis/index.service";

class LayoutStore {
    @observable public players: APlayer[] = [];
    @observable public globalStatus: GlobalStatus = {
        full_site_gray: false,
        __v: 0,
        _id: '',
    };

    public getPlayers = async () => {
        try {
            // const res = await layoutsService.getPlayers();
            const res ={data: [{
                "_id": "5cbb005bec9b0f4eac13467d",
                "title": "イチリンソウ",
                "artist": "山本彩",
                "cover": "//yancey-assets.oss-cn-beijing.aliyuncs.com/resize_image.jpg",
                "music_file_url": "//yancey-assets.oss-cn-beijing.aliyuncs.com/%E5%B1%B1%E6%9C%AC%E5%BD%A9%20-%20%E3%82%A4%E3%83%81%E3%83%AA%E3%83%B3%E3%82%BD%E3%82%A6.mp3",
                "lrc": "[ar:山本彩]\n[al:イチリンソウ]\n[ti:イチリンソウ]\n[00:00.000] 作曲 : 山本彩\n[00:00.000] 作词 : 山本彩\n[00:00.000]\n[00:00.800]ただ俯いて歩いていた　僕は春を見落としてた\n[00:10.590]どれくらい時が経ったのだろう　桜の花びらが舞っていた\n[00:20.710]すぐに忘れられるはずだ\n[00:29.620]胸の奥にしまい込んで　日向を探すの\n[00:39.200]こんな道の脇　咲いていた　あなたはひとりきり\n[00:45.800]真っ直ぐに　煌めいて　強く強く\n[00:50.480]いつの日か　枯れること　知ってるかのように\n[00:55.790]今という瞬間を　儚く生きてる\n[01:15.310]そういえばあの時も今日と同じような季節だった\n[01:24.909]どこからも光が失われ　何もかもがどうでもよかった\n[01:34.900]いつでも傷つかない事が\n[01:43.720]強くなれるという事ではないと分かったよ\n[01:53.379]いつも　気が付けば探してた　あなたの事だけを\n[02:00.049]会えた時　強くなれる気がした\n[02:04.640]雨に濡れ　踏まれても　咲く場所を変えない\n[02:09.949]堂々と咲き誇る姿が今もずっと\n[02:20.900]変わらない僕の道標\n[02:27.500]ただ俯いて歩いていた　僕は春を見落としてた\n[02:36.620]桜の影に隠れてそっと　揺れていた白い妖精\n[02:47.879]こんな道の脇　咲いていた　一輪草のように\n[02:54.449]ひとりでも　咲ける花になりたい\n[02:59.129]雨に濡れ　踏まれても　咲く場所を変えずに\n[03:04.319]堂々と咲き誇れるような\n[03:08.930]また次の春が来たら　あなたに会いたい\n[03:13.939]その時は今よりも　強くなった僕だ\n[03:23.939]",
                "show": true,
                "upload_date": "2019-04-20T11:19:55.171Z",
                "__v": 0
            }]};
            runInAction(() => {
                res.data.map(item => {
                    this.players.push({
                        name: item.title,
                        artist: item.artist,
                        url: item.music_file_url,
                        cover: item.cover,
                        lrc: item.lrc,
                    })
                })
                const ap = new _APlayer({
                    container: document.querySelector('#player'),
                    fixed: true,
                    lrcType: 1,
                    audio: layoutsStore!.players,
                });
                ap.lrc.show();
            });
        } catch (error) {
            setToast('获取播放器失败');
        }
    }

    public getGlobalStatus = async () => {
        try {
            // const res = await layoutsService.getGlobalStatus();
            const res = {
                data : {"_id":"5bb4a57ecd2d933a5afa6d20","full_site_gray":false,"__v":0}
            }
            runInAction(() => {
                this.globalStatus = res.data;
            });
        } catch (e) {
            setToast('获取全局状态失败');
        }
    };

}

const layoutsStore = new LayoutStore();
export default layoutsStore;