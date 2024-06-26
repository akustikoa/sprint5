import { Component } from '@angular/core';
import { EscenaComponent } from '../escena/escena.component';
import { StepsService } from '../steps.service';
import { iStep } from '../i-step';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [EscenaComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  public steps: iStep[]; //creem array de frases
  constructor(public arrayService: StepsService) {
    this.steps = this.arrayService['steps'];
  }
}
