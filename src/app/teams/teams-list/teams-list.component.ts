import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { ITeam } from '../teams';

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.css']
})
export class TeamsListComponent implements OnInit {

  @Input() teamList: ITeam[];
  @Output() addToFav = new EventEmitter<ITeam>();
  displayedColumns = ['id', 'full_name', 'city', 'conference', 'division', 'actions'];
  constructor() { }

  ngOnInit() {
  }

  addToMyTeams(team: ITeam) {
    this.addToFav.emit(team);
  }

}
