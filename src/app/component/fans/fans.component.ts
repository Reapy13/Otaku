import { Component, OnInit } from '@angular/core';
import {FanService} from '../../service/fan.service';

@Component({
    selector: 'app-fans',
    templateUrl: './fans.component.html',
    styleUrls: ['./fans.component.css']
})
export class FansComponent implements OnInit {

    constructor(public fanService: FanService) { }

    ngOnInit(): void { }

}
