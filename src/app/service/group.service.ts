import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Artist} from '../model/Artist';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

    artistList: Array<Artist>;

    constructor(private httpClient: HttpClient) {
        this.load();
    }

    load() {
        this.httpClient.get<Array<Artist>>('http://localhost:3000/artists')
            .subscribe(resp => this.artistList = resp, error => console.log(error));
    }

    public getByAlias(alias: string): Artist {
        return this.artistList.filter(artist => artist.alias === alias)[0];
    }
}
