import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { ITeams } from '../teams';

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.css']
})
export class TeamsListComponent implements OnInit {

  @Input() teamList: ITeams[];
  @Output() addToFav = new EventEmitter<ITeams>();
  displayedColumns = ['id', 'full_name', 'city', 'conference', 'division', 'actions'];
  constructor() { }

  ngOnInit() {
  }

  addToMyTeams(team: ITeams) {
    this.addToFav.emit(team);
  }

}
