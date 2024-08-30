import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  initialInvestment = signal(0);
  annualInvestment = signal(0);
  expectedReturn = signal(5);
  durations = signal(10);

  OnFormSubmit() {
    console.log('Submittied');

    console.log(this.initialInvestment());
    console.log(this.annualInvestment());
    console.log(this.expectedReturn());
    console.log(this.durations());
  }
}
