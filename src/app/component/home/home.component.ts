import { Component, OnInit } from '@angular/core';
import {ActivityService} from '../../service/activity.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    constructor(public activityService: ActivityService) { }

    ngOnInit(): void { }

}
