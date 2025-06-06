import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ActionBarComponent } from './components/action-bar/action-bar.component';
import { MaxMinMeterComponent } from './components/max-min-meter/max-min-meter.component';
import { SqaureFlexComponent } from './components/sqaure-flex/sqaure-flex.component';


@Component({
  selector: 'app-root',
  imports: [MaxMinMeterComponent, SqaureFlexComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  appMaxLabel = 'Maximum';
  appMinLabel = 'Minimum';

  sqaureHeight = 100;
  sqaureWidth = 100;

  testClick(){
    console.log('Button clicked');
  }

  testNumberChange(value: number) {
    console.log('Number changed : ' + value);
  }

  doAppMinChange(value: number) {
    console.log('App min changed : ' + value);
    this.appMinLabel = 'Minimum: ' + value;
  }

  doAppMaxChange(value: number) {
    console.log('App max changed : ' + value);
    this.appMaxLabel = 'Maximum: ' + value;
  }
}

// price = 0;

// calBuffet(value: string): void {
//   const price = Number(value);
//   this.price = (price * 3) / 4;
//   console.log(this.price);


// }
// title:String = 'poom';
// test:String = 'test';

// showMyName(name: String): void {
//   console.log('My name is Poom');
//   this.test = name;
// }
