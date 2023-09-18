export default class Account {
  private balance: number = 0

  public deposit(amount: number) {
    if (amount > 0) this.balance += amount
  }

  public withdraw(amount: number) {
    if (amount > 0) this.balance -= amount
  }

  public getBalance(): number {
    return this.balance
  }
}
