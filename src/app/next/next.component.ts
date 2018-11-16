import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-next',
  templateUrl: './next.component.html',
  styleUrls: ['./next.component.scss']
})
export class NextComponent implements OnInit {
  fillerNav = Array.from({ length: 10 }, (_, i) => `Nav Item ${i + 1}`);

  centerFlex = Array.from({ length: 4 }, (_, i) => `Nav Item ${i + 1}`);

  threearray = Array.from({ length: 3 }, (_, i) => `Nav Item ${i + 1}`);

  constructor() { }

  ngOnInit() {
  }

}
