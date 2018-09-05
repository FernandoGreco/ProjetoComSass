import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  cars = [
    'marea','tempra', '147','ferrari'
  ];

  myData(){
    return "Esse é meu carro " +this.cars[3];
  }
}
