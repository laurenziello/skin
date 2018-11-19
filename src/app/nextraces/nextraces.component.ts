import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nextraces',
  templateUrl: './nextraces.component.html',
  styleUrls: ['./nextraces.component.scss']
})
export class NextracesComponent implements OnInit {
  threearray = Array.from({ length: 3 }, (_, i) => `Nav Item ${i + 1}`);

  constructor() { }

  ngOnInit() {
  }

}
