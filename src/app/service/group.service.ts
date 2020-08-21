import { Injectable } from '@angular/core';
import {Activity} from '../model/Activity';
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
}
