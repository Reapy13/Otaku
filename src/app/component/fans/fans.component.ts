import { Component, OnInit } from '@angular/core';
import { FanService } from '../../service/fan.service';
import { Fan } from '../../model/Fan';

@Component({
    selector: 'app-fans',
    templateUrl: './fans.component.html',
    styleUrls: ['./fans.component.css']
})
export class FansComponent implements OnInit {

    // Variables for the adding fan form
    public fanAdding: boolean = false;
    public fanTmp: Fan = new Fan('','','','');

    // Label for the adding fan form
    public formBtn: string = "+";

    // Variables used for filtering the table
    public lastNameFilter: string = "";
    public firstNameFilter: string = "";
    public cityFilter: string = "";
    public countryFilter: string = "";

    // Logic variables for sorting and filtering
    private column: string = "";
    public filterOpen = false;
    private sorted: boolean = false;

    constructor(public fanService: FanService) { }

    ngOnInit(): void { }

    /**
     Sorts the table by the last name column.
      */
    sortByLastName() {
        // If the table is not already sorted, or if the sorted column is not the same column
        if (!this.sorted && this.column !== "lastName") {
            this.sorted = true;
            this.fanService.fanList.sort((a, b) => {
                return a.nom < b.nom ? -1 : 1;
            });
        } else {
            // Otherwise, the table is already sorted by this column, so reverse the table.
            this.sorted = false;
            this.column = "lastName";
            this.fanService.fanList.reverse();
        }
    }

    /**
     Sorts the table by the first name column.
      */
    sortByFirstName() {
        // If the table is not already sorted, or if the sorted column is not the same column
        if (!this.sorted && this.column !== "firstName") {
            this.sorted = true;
            this.fanService.fanList.sort((a, b) => {
                return a.prenom < b.prenom ? -1 : 1;
            });
        } else {
            // Otherwise, the table is already sorted by this column, so reverse the table.
            this.sorted = false;
            this.column = "firstName";
            this.fanService.fanList.reverse();
        }
    }

    /**
     Sorts the table by the city column.
      */
    sortByCity() {
        // If the table is not already sorted, or if the sorted column is not the same column
        if (!this.sorted && this.column !== "city") {
            this.sorted = true;
            this.fanService.fanList.sort((a, b) => {
                return a.ville < b.ville ? -1 : 1;
            });
        } else {
            // Otherwise, the table is already sorted by this column, so reverse the table.
            this.sorted = false;
            this.column = "city";
            this.fanService.fanList.reverse();
        }
    }

    /**
     Sorts the table by the country column.
      */
    sortByCountry() {
        // If the table is not already sorted, and if the sorted column is not the same column
        if (!this.sorted && this.column !== "country") {
            this.sorted = true;
            this.fanService.fanList.sort((a, b) => {
                return a.pays < b.pays ? -1 : 1;
            });
        } else {
            // Otherwise, the table is already sorted by this column, so reverse the table.
            this.sorted = false;
            this.column = "country";
            this.fanService.fanList.reverse();
        }
    }

    /**
     Filters the table with the 4 fields (last name, first name, city and country).
     The filter is non case-sensitive. The fourth filters are applicable at the same time.
     This function is called when one filter changes.
      */
    filter(fan: Fan) {
        return fan.nom.toLowerCase().includes(this.lastNameFilter.toLowerCase())
            && fan.prenom.toLowerCase().includes(this.firstNameFilter.toLowerCase())
            && fan.ville.toLowerCase().includes(this.cityFilter.toLowerCase())
            && fan.pays.toLowerCase().includes(this.countryFilter.toLowerCase());
    }

    /**
     Opens or closes the adding fan form. Changes the adding fan form button label.
     */
    openForm() {
        this.fanAdding = !this.fanAdding;
        this.formBtn = this.formBtn === "+" ? "-" : "+";
    }

    /**
     Adds a fan into database. Clears the form fields.
     */
    addFan() {
        this.fanService.addFan(this.fanTmp);
        this.fanTmp = new Fan('','','', '');
    }
}
