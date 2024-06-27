import { Component, Input } from '@angular/core';
import { iStep } from '../i-step';

@Component({
  selector: 'app-escena',
  standalone: true,
  imports: [],
  templateUrl: './escena.component.html',
  styleUrl: './escena.component.css',
})
export class EscenaComponent {
  @Input() steps: iStep[] = []; // definim entrada de l'array del servei

  public currentStep = 0;

  augmentar(): void {
    this.currentStep++;
    console.log(this.currentStep);
  }

  disminuir(): void {
    this.currentStep--;
    console.log(this.currentStep);
  }
  setCurrentStepTo(x: number) {
    this.currentStep = x;
  }
}
