import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Fan} from '../model/Fan';

@Injectable({
  providedIn: 'root'
})
export class FanService {

    fanList: Array<Fan>;

    constructor(private httpClient: HttpClient) {
        this.load();
    }

    load() {
        this.httpClient.get<Array<Fan>>('http://localhost:3000/fans')
            .subscribe(resp => this.fanList = resp, error => console.log(error));
    }

    addFan(fan: Fan) {
        console.log(fan);
        this.httpClient.post<Fan>('http://localhost:3000/fans', fan)
            .subscribe(() => this.load(), error => console.log(error));
    }
}
