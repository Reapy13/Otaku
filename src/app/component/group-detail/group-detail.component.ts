import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {GroupService} from '../../service/group.service';
import {Artist} from '../../model/Artist';

@Component({
    selector: 'app-group-detail',
    templateUrl: './group-detail.component.html',
    styleUrls: ['./group-detail.component.css']
})
export class GroupDetailComponent implements OnInit {

    public artist: Artist;

    constructor(private router: Router, private route: ActivatedRoute, private groupService: GroupService) { }

    ngOnInit(): void {
        this.route.params.subscribe((params) => {
            this.artist = this.groupService.getByAlias(params['name']);
        });
    }


}
