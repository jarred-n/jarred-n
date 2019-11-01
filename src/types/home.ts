import { ArticleStoreType } from './article';

export interface Cover {
    name: string;
    show: boolean;
    upload_date: string;
    url: string;
    __v: number;
    _id: string;
  }  

export interface Project {
    introduction: string;
    poster: string;
    title:string;
    upload_date: string;
    url: string;
    __v: number;
    _id: string;
}

export interface HomeStore {
    announcement: string;
    motto: string;
    projects: Project[];
    coverUrl: string;
    getAnnouncement: () => void;
    getMotto: () => void;
    getProject: () => void;
    loadBgImd: () => void;
    getCover: (position: string) => void;
 }

export interface HomeProps {
    homeStore?: HomeStore,
    articleStore?: ArticleStoreType;
}