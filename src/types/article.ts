export interface ArticleStoreType {
    posts: ArticleDetail[];
    hots: ArticleDetail[];
    tags: string[];
    archives: Archive[];
    total: number;
    showSearch: boolean;
    isLiked: boolean;
    likeNum: boolean;
    curIp: string;
    isDetailLoading: false;
}

export interface ArticleProps {
    articleStore?: ArticleStoreType;
    location?: any;
}
export interface ArticleDetail {
    _id: string;
    header_cover: string;
    title: string;
    summary: string;
    content: string;
    publish_date: string;
    last_modified_date: string;
    tags: string[];
    like_count: string[];
    pv_count: number;
}

export interface ArchiveMonth {
    day: number;
    id: string;
    pv_count: number;
    title: string;
}

export interface Archive {
    _id: {
        year: number;
    };
    data: {
        month: number;
        data: ArchiveMonth[]
    }
} 