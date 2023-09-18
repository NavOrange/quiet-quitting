export default abstract class UIControl {
  public enable() {
    console.log('Enabled')
  }

  abstract draw(): void
}
