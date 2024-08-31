import { Component, effect, input } from '@angular/core';
import { InvestmentResult } from '../shared/helpers/investment-results';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  results = input.required<InvestmentResult[]>()
  constructor() {
    effect(() => {
      console.log('resultes', this.results())
    })
  }
}
