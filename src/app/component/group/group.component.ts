import { Component, OnInit } from '@angular/core';
import {GroupService} from '../../service/group.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  constructor(public groupService: GroupService) { }

  ngOnInit(): void {
  }



}
