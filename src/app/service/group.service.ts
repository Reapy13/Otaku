import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Artist } from '../model/Artist';

@Injectable({
    providedIn: 'root'
})
export class GroupService {

    public artistList: Array<Artist>;

    constructor(private httpClient: HttpClient) {
        this.load();
    }

    /**
     * Loads the full artist list.
     */
    load() {
        this.httpClient.get<Array<Artist>>('http://localhost:3000/artists')
            .subscribe(resp => this.artistList = resp, error => console.log(error));
    }

    /**
     * Gets the artist by his alias.
     * @param alias alias of the artist
     */
    public getByAlias(alias: string): Artist {
        return this.artistList.filter(artist => artist.alias === alias)[0];
    }
}
