import { Component, computed, effect, inject, input } from '@angular/core';
import { InvestmentResult } from '../shared/helpers/investment-results';
import { CurrencyPipe } from '@angular/common';
import { InvestmentService } from '../shared/service/investment.service';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  // results = input.required<InvestmentResult[]>()
  private iService = inject(InvestmentService);
  results = computed(() => this.iService.results())
  constructor() {
    effect(() => {
      console.log('resultes', this.results())
    })
  }
}
