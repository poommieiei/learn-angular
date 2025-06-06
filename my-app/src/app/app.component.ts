import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ActionBarComponent } from './components/action-bar/action-bar.component';
import { MaxMinMeterComponent } from './components/max-min-meter/max-min-meter.component';
import { SqaureFlexComponent } from './components/sqaure-flex/sqaure-flex.component';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  imports: [ ActionBarComponent, MaxMinMeterComponent, SqaureFlexComponent, CommonModule],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  productLists: string[] = ['Apple', 'Banana', 'Orange', 'Grapes', 'Mango'];

  appMaxLabel = 'Maximum';
  appMinLabel = 'Minimum';

  appCouter = 20;

  sqaureHeight = 100;
  sqaureWidth = 100;

  avtivte = true;

  pushProduct(){
    this.productLists.push('New Product ' + (this.productLists.length + 1));
  }

  unshiftProduct(){
    this.productLists.unshift('New Product ' + (this.productLists.length + 1));
  }

  removeProduct(index: number){
    this.productLists.splice(index, 1);
  }

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
