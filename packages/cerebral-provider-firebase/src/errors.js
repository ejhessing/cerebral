export class FirebaseProviderError extends Error {
  constructor (error) {
    super()
    this.name = 'FirebaseProviderError'
    this.message = error.message
  }
}

export class FirebaseProviderAuthenticationError extends FirebaseProviderError {
  constructor (error) {
    super()
    this.name = 'FirebaseProviderAuthenticationError'
    this.message = error.message
    this.code = error.code
  }
}