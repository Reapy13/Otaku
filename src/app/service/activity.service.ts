import { Injectable } from '@angular/core';
import { Activity } from '../model/Activity';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ActivityService {

    public activityList: Array<Activity>;

    // Loads the activities when the service is constructed
    constructor(private httpClient: HttpClient) {
        this.load();
    }

    // Initialize activityList with all the activities sorting by date, the last to the first
    public load() {
        this.httpClient.get<Array<Activity>>('http://localhost:3000/activities')
            .subscribe(resp => this.activityList = resp.sort((a,b) => {
                return a.date > b.date ? -1 : 1;
            }), error => console.log(error));
    }
}
