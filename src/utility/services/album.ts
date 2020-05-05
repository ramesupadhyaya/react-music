import request from './base';
import { AlbumResponse } from '../../model';
import { APIPath } from '../constant';


export class AlbumService {

    static get(artist: string): Promise<AlbumResponse> {
        const searchKey = artist.replace(' ', '+').toLowerCase();
        return request<AlbumResponse>({
            url: `${APIPath.album}?term=${searchKey}&entity=album`,
            method: 'GET'
        });
    }
}