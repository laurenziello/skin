import { Component, OnInit } from '@angular/core';
import { RaceService } from '../race.service';

@Component({
  selector: 'app-todayrace',
  templateUrl: './todayrace.component.html',
  styleUrls: ['./todayrace.component.scss']
})
export class TodayraceComponent implements OnInit {

  races: any;

  dateNow: Date;

  fillerNav = Array.from({ length: 10 }, (_, i) => `Nav Item ${i + 1}`);

  filler5 = Array.from({ length: 5 }, (_, i) => `Nav Item ${i + 1}`);

  filler4 = Array.from({ length: 4 }, (_, i) => `Nav Item ${i + 1}`);

  constructor(private raceService: RaceService) { }

  ngOnInit() {
    this.getRaces();
    this.dateNow = new Date();
  }

  getRaces(): void {
    this.raceService.getRaces()
        .subscribe(races => this.races = races);
  }

}
