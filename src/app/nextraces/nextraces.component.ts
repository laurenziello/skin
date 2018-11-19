import { Component, OnInit } from '@angular/core';
import { RaceService } from '../race.service';

@Component({
  selector: 'app-nextraces',
  templateUrl: './nextraces.component.html',
  styleUrls: ['./nextraces.component.scss']
})
export class NextracesComponent implements OnInit {
  threearray = Array.from({ length: 3 }, (_, i) => `Nav Item ${i + 1}`);

  next: any;

  chunked_arr: any = [];

  constructor(private raceService: RaceService) { }

  ngOnInit() {
    this.getNext();
  }

  getNext(): void {
    this.raceService.getNext()
      .subscribe(next => {
        const copied = [...next.race]; // ES6 destructuring
        const numOfChild = Math.ceil(copied.length / 3); // Round up to the nearest integer
        for (let i = 0; i < numOfChild; i++) {
          this.chunked_arr.push(copied.splice(0, 3));
        }
        console.log(this.chunked_arr);
      });
  }

}
