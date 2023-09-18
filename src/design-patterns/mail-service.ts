export default class MailService {
  public seedEmail() {
    this.connect()
    this.authenticate()
    // Send email
    this.disconnect()
  }

  private connect() {
    console.log('Connect')
  }

  private disconnect() {
    console.log('Disconnect')
  }

  private authenticate() {
    console.log('Authenticate')
  }
}
