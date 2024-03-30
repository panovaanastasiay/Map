export default class ErrorRepository {
    constructor() {
      this.errors = new Map();
    }
  
    addError(code, error) {
      this.errors.set(code, error);
    }
  
    translate(code) {
      if (!this.errors.has(code)) {
        return 'Unknown error';
      }
      return this.errors.get(code);
    }
  }