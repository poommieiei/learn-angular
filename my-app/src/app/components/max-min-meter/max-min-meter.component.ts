import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionBarComponent } from '../action-bar/action-bar.component';

@Component({
  selector: 'app-max-min-meter',
  imports: [CommonModule, ActionBarComponent],
  standalone: true,
  templateUrl: './max-min-meter.component.html',
  styleUrl: './max-min-meter.component.css'
})
export class MaxMinMeterComponent {
  @Input() minLabel = 'minlabel1';
  @Input() maxLabel = 'maxlabel1';

  @Output() minChange = new EventEmitter();
  @Output() maxChange = new EventEmitter();

  doMinChange(value: number) {
    this.minChange.emit(value);
  }

  doMaxChange(value: number) {
    this.maxChange.emit(value);
  }
}
