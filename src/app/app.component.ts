import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Random Number Generator';
  myMinimum: number;
  myMaximum: number;
  clickMessage;
  onClickMe(){
    this.clickMessage = this.randomNumberGenerator(this.myMaximum, this.myMinimum);
  }

  randomNumberGenerator(max: number, min: number) : number {
    return  Math.floor(Math.random() * (max - min) + +min) + +1;
  }

}

