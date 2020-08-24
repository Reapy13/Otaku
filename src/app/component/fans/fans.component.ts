import { Component, OnInit } from '@angular/core';
import {FanService} from '../../service/fan.service';
import {Fan} from '../../model/Fan';

@Component({
    selector: 'app-fans',
    templateUrl: './fans.component.html',
    styleUrls: ['./fans.component.css']
})
export class FansComponent implements OnInit {

    public filterOpen = false;

    public lastNameFilter: string = "";
    public firstNameFilter: string = "";
    public cityFilter: string = "";
    public countryFilter: string = "";

    private sorted: boolean = false;

    private column: string = "";

    constructor(public fanService: FanService) { }

    ngOnInit(): void { }

    sortByLastName() {
        if (!this.sorted && this.column !== "lastName") {
            this.sorted = true;
            this.fanService.fanList.sort((a, b) => {
                return a.nom < b.nom ? -1 : 1;
            });
        } else {
            this.sorted = false;
            this.column = "lastName";
            this.fanService.fanList.reverse();
        }
    }

    sortByFirstName() {
        if (!this.sorted && this.column !== "firstName") {
            this.sorted = true;
            this.fanService.fanList.sort((a, b) => {
                return a.prenom < b.prenom ? -1 : 1;
            });
        } else {
            this.sorted = false;
            this.column = "firstName";
            this.fanService.fanList.reverse();
        }
    }

    sortByCity() {
        if (!this.sorted && this.column !== "city") {
            this.sorted = true;
            this.fanService.fanList.sort((a, b) => {
                return a.ville < b.ville ? -1 : 1;
            });
        } else {
            this.sorted = false;
            this.column = "city";
            this.fanService.fanList.reverse();
        }
    }

    sortByCountry() {
        if (!this.sorted && this.column !== "country") {
            this.sorted = true;
            this.fanService.fanList.sort((a, b) => {
                return a.pays < b.pays ? -1 : 1;
            });
        } else {
            this.sorted = false;
            this.column = "country";
            this.fanService.fanList.reverse();
        }
    }

    filter(fan: Fan) {
        return fan.nom.toLowerCase().includes(this.lastNameFilter.toLowerCase())
            && fan.prenom.toLowerCase().includes(this.firstNameFilter.toLowerCase())
            && fan.ville.toLowerCase().includes(this.cityFilter.toLowerCase())
            && fan.pays.toLowerCase().includes(this.countryFilter.toLowerCase());
    }
}
