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

  array: any = [];

  constructor(private raceService: RaceService) { }

  ngOnInit() {
    this.getNext();
  }

  getNext(): void {
    this.raceService.getNext()
      .subscribe(next => {
        const copied = [...next.race]; // ES6 destructuring
        this.array = copied.slice(0, 3);
        this.array.map(element => {
          this.raceService.getRace(element.id)
            .subscribe(race => {
              console.log(race);
              race.race.horse.map(horse => {
                console.log(horse);
                if (race.race.qf[0].odds) {
                  const quotaVincente = race.race.qf[0].odds.filter(
                    qf => qf.esito === horse.number
                  );
                  if (quotaVincente.length > 0) {
                    horse.quotaVincente = quotaVincente[0].quota;
                  } else {
                    horse.quotaVincente = 0;
                  }
                }
                if (race.race.qf[1].odds) {
                  const quotaPiazzato = race.race.qf[1].odds.filter(
                    qf => qf.esito === horse.number
                  );
                  if (quotaPiazzato.length > 0) {
                    horse.quotaPiazzato = quotaPiazzato[0].quota;
                  } else {
                    horse.quotaPiazzato = 0;
                  }
                }

              });
              element.race = race.race;
            });
        });
        console.log(this.array);
        const numOfChild = Math.ceil(copied.length / 3); // Round up to the nearest integer
        for (let i = 0; i < numOfChild; i++) {
          this.chunked_arr.push(copied.splice(0, 3));
        }
      });
  }

}
