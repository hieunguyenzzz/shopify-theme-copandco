class FilterPrice extends HTMLElement {
    constructor() {
      super();
      this.init.bind(this)
      this.init()
    }
  
    init(){
        var lowerInput =  this.querySelector('#one')
        var upperInput =  this.querySelector('#two')
        var lowerSlider = this.querySelector('#lower');
        var  upperSlider = this.querySelector('#upper');
        console.log({
            lowerInput,
            upperInput,
            lowerSlider,
            upperSlider,
        })
        lowerSlider.oninput=function (e) {
            console.log(e)
            lowerInput.value=parseInt(e.target.value)
            var event = new Event('input');
            lowerInput.dispatchEvent(event);
        };
        upperSlider.oninput=function (e) {
            console.log(e)
            upperInput.value=parseInt(e.target.value)
            var event = new Event('input');
            upperInput.dispatchEvent(event);
        };
    }
  }
  
  customElements.define('filter-price', FilterPrice);
  