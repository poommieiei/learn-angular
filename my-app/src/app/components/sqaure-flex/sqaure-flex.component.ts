import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sqaure-flex',
  imports: [],
  standalone: true,
  templateUrl: './sqaure-flex.component.html',
  styleUrl: './sqaure-flex.component.css'
})
export class SqaureFlexComponent {
  @Input() divWeight = 200;
  @Input() divHeight = 200;
}
