// IIFE

(function() {

  class KeyLogger extends HTMLElement {
    constructor() {
      super()
      this._shadowRoot = this.attachShadow({mode: 'open'})
    }
  }

}());
