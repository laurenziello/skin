import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: any = {
  totalodds: 1820,
  bet: 10,
  elements: [
    {
      type: 'winner',
      number: 1,
      name: 'Commodore Barry',
      ippodromo: 'Southwell',
      race: 3,
      time: '14:30',
      quota: 130
    },
    {
      type: 'place on 2',
      number: 4,
      name: 'Joegogo',
      ippodromo: 'Lingfield',
      race: 4,
      time: '14:20',
      quota: 1400
    }
  ]};

  add(message: string) {
    this.cart.push(message);
  }

  clear() {
    this.cart = [];
  }
}
