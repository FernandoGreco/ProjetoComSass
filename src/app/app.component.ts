import { Component } from '@angular/core';
import { DataService } from './data.service';
import {trigger,state,style,transition,animate,keyframes} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations:[
    trigger('myAwesomeAnimation',[
      state('small',style({
        transform:'scale(1)',
      })),
      state('large',style({
        transform:'scale(1.2)',
      })),
      transition('small <=> large', animate ('300ms ease-in', style({
        transform: 'translateY(40px)'
      }))),
    ]),

    
  ]
})
export class AppComponent {

  state: string = 'small';

  constructor(private dataService:DataService){

  }
  title = 'app';

  myEvent(event){
    console.log(event);
    
  }

   tituloVermelho = {
      'vermelho': true,
      'tituloMaior': true,
     'fundo': true
    }

    titleStyle = true;   
  
  animateMe(){
    this.state = (this.state === 'small' ? 'large' : 'small');
  }
}
