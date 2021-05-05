/**
* Javascript  Counter Plugin version 1.0.2
*
* Variables :
* counter_value :  sets the initial value  (in interger )
*
* speed :  determines the speed of the interval (in milliseconds )
*
* increment_value : increases the value every time interval rolls with value defined !
*
* delay : make it zero for no delay . sets the delay of the timer .
*
* stop_at_max : takes 2 values true or false ,
* if false => then indefinite increase in timer . if true => rises to maximum and then stops at max_value.
*
* max_value : after which (if stop_at_max is set to be true) the timer  stops
*/


class Counter {

  constructor(element, state) {
    this.element = document.querySelector(element);
    this.interval = null;
    this.state = state;
    this.initial_counter_value = this.state.counter_value;
    if (this.state.start != null && this.state.start != undefined) {
      if (this.state.start == true) {
        this.startTimer();
      }
    }
  }
  startTimer = ()=> {
    const self = this;
    setTimeout(function() {
      self.interval = setInterval(()=> {
        self.state.counter_value += self.state.increment_value;
        if (self.state.stop_at_max) {
          if (self.state.counter_value >= self.state.max_value) {
            clearInterval(self.interval);
          }
        }
        self.element.innerText = self.state.counter_value;

      },
        self.state.speed);

    }, this.state.delay);
  }
  stopTimer = ()=> {
    clearInterval(this.interval);
    this.state.counter_value = this.initial_counter_value;
    this.state.delay = 0;
    this.element.innerText = this.initial_counter_value;
  }
  pauseTimer = ()=> {
    clearInterval(this.interval);
    this.state.delay = 0;
  }
}
