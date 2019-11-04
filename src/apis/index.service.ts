import { GET } from '../tools/axios';

import { AxiosResponse } from 'axios';

import { Player, GlobalStatus } from '../types/layout';

class LayoutsService {
  public getGlobalStatus(): Promise<AxiosResponse<GlobalStatus>> {
    return GET(`/globalStatus`, null, '');
  }

  public getPlayers(): Promise<AxiosResponse<Player[]>> {
    return GET(`/litePlayers`, null, '');
  }
}

const layoutsService = new LayoutsService();

export default layoutsService;
