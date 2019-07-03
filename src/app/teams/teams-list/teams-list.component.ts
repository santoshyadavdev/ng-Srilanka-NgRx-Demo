import { Component, OnInit, Input } from '@angular/core';
import { ITeams } from '../teams';

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.css']
})
export class TeamsListComponent implements OnInit {

  @Input() teamList: ITeams[];
  constructor() { }

  ngOnInit() {
  }

}