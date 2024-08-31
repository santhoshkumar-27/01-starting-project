import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalculateData } from '../shared/helpers/investment-results';

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
  @Output() calculate = new EventEmitter<CalculateData>()
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


    this.calculate.emit({
      annualInvestment: this.initialInvestment(),
      duration: this.durations(),
      expectedReturn: this.expectedReturn(),
      initialInvestment: this.initialInvestment()
    })


    this.initialInvestment.set(0);
    this.annualInvestment.set(0);
    this.expectedReturn.set(5);
    this.durations.set(10);
  }
}
