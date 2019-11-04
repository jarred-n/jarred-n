export interface Player {
    __v: number;
    _id: string;
    title: string;
    artist: string;
    show: boolean;
    music_file_url: string;
    lrc: string;
    cover: string;
    upload_date: string;
  }
  
  export interface APlayer {
    name: string;
    artist: string;
    url: string;
    cover: string;
    lrc: string;
  }
  
  export interface GlobalStatus {
    full_site_gray: boolean;
    __v: number;
    _id: string;
  }
  interface LayoutsStoreType {
    players: Player[];
    globalStatus: GlobalStatus;
    getPlayers: () => void;
    getGlobalStatus: () => void;
  }
  
  export interface LayoutsProps {
    layoutsStore?: LayoutsStoreType;
  }
  