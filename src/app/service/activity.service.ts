import { Injectable } from '@angular/core';
import {Activity} from '../model/Activity';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

    activityList: Array<Activity>;

    constructor(private httpClient: HttpClient) {
        this.load();
    }

    load() {
        this.httpClient.get<Array<Activity>>('http://localhost:3000/activities')
            .subscribe(resp => this.activityList = resp, error => console.log(error));
    }
}
