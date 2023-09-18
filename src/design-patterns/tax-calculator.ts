import { TaxCalculator2019 } from './tax-calculator-2019'

export interface TaxCalculator {
  calculateTax(): number
}

export default class {
  public static calculator: TaxCalculator

  public static main() {
    this.calculator = this.getCalculator()
    this.calculator.calculateTax()
    console.log(this.calculator.calculateTax())
  }

  public static getCalculator(): TaxCalculator {
    return new TaxCalculator2019()
  }
}
