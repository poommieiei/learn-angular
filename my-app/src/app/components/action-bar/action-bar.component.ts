import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-action-bar',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './action-bar.component.html',
  styleUrl: './action-bar.component.css',
})
export class ActionBarComponent {
  @Input() couter: number = 1;
  @Input() step: number = 1;
  @Output() couterChange = new EventEmitter();

  @Input() inputDisplay= true;

  decrese() {
    if (this.couter - this.step >= 0) {
      this.couter = this.couter - this.step;
      this.couterChange.emit(this.couter);
    }
  }

  increse() {
    if (this.couter + this.step <= 100) {
      this.couter = this.couter + this.step;
      this.couterChange.emit(this.couter);
    }
  }
}
