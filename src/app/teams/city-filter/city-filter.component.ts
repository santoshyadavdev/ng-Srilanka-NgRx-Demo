import {
  Component, OnInit, Input,
  Output, EventEmitter
} from '@angular/core';
import { ITeams } from '../teams';
import { MatSelectChange } from '@angular/material';

@Component({
  selector: 'app-city-filter',
  templateUrl: './city-filter.component.html',
  styleUrls: ['./city-filter.component.css']
})
export class CityFilterComponent implements OnInit {

  @Input() teamList: Array<ITeams>;
  @Output() cityFilter = new EventEmitter<ITeams>();
  constructor() { }

  ngOnInit() {
  }

  selectCity(cityEvent: MatSelectChange) {
    this.cityFilter.emit(cityEvent.value);
  }
}
