import { Injectable, signal } from '@angular/core';
import { CalculateData, InvestmentResult } from '../helpers/investment-results';

@Injectable({
  providedIn: 'root'
})
export class InvestmentService {

  results = signal<InvestmentResult[]>([]);

  constructor() { }

  calculateInvestmentResults({ initialInvestment, duration, expectedReturn, annualInvestment }: CalculateData) {
    const annualData = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }

    console.log('annual data', annualData)
    // this.results = [...annualData];
    this.results.set(annualData)
  }
}
