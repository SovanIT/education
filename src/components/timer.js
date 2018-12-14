import React, { Component } from 'react'
export default class Timer extends Component {
    constructor() {
        super();
        this.state = { time: {}, seconds: 5 };
        this.timer = 0;
        this.startTimer = this.startTimer.bind(this);
        this.countDown = this.countDown.bind(this);
      }
    
      secondsToTime(secs){
        let hours = Math.floor(secs / (60 * 60));
        let divisor_for_minutes = secs % (60 * 60);
        let minutes = Math.floor(divisor_for_minutes / 60);
        let divisor_for_seconds = divisor_for_minutes % 60;
        let seconds = Math.ceil(divisor_for_seconds);
        let obj = {
          "h": (hours < 10 ) ? '0' + hours : hours,
          "m": (minutes < 10) ? '0' + minutes : minutes,
          "s": (seconds < 10) ? '0' + seconds : seconds
        };
        return obj;
      }
    
      componentWillMount() {
        let secs = this.props.seconds;
        let timeLeftVar = this.secondsToTime(secs);
        this.setState({ time: timeLeftVar, seconds: secs });
        this.startTimer();
      }
    
      startTimer() {
        if (this.timer === 0 && this.state.seconds > 0) {
          this.timer = setInterval(this.countDown, 1000);
        }
      }
    
      countDown() {
        // Remove one second, set state so a re-render happens.
        let seconds = this.state.seconds - 1;
        this.setState({
          time: this.secondsToTime(seconds),
          seconds: seconds,
        });
        
        // Check if we're at zero.
        if (seconds === 0) { 
            this.props.timeRemaining(this.state.seconds);
        }
      }
    
      render() {
        return(
          <div> Remaining Time:&nbsp;
            {this.state.time.m}m : {this.state.time.s}s
          </div>
        );
      }

      componentWillUnmount(){
        clearInterval(this.timer);
      }
  }
  