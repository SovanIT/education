import React, { Component } from 'react';

class Save extends Component {

  render() {
    return (
      <div className="text-right margin-top-20">
        
          <button className="btn btn-info btn-sm" 
          onClick={this.props.clickPrev.bind(this,this.props.status)}
          disabled = {(this.props.status > 1) ? false : true}>
            Previous
          </button>
       
          <button className="btn btn-success btn-sm" 
          onClick={this.props.saveAnswer.bind(this, this.props.answer, this.props.status)}>
           Save 
          </button>

          <button className="btn btn-warning btn-sm" 
          onClick={this.props.clearAnswer.bind(this, this.props.status)}>
           Clear
          </button>
       
          <button className="btn btn-info btn-sm" 
          style={{display : (this.props.status < this.props.length) ? "inline-block":"none"}}
          onClick={this.props.clickNext.bind(this,this.props.status)}>
            Next
          </button>

           <button className="btn btn-success btn-sm" 
          style={{display : (this.props.status === this.props.length) ? "inline-block":"none"}}
          onClick={this.props.submit.bind(this)}>
            Submit
          </button>
        
      </div>
    );
  }
}

export default Save;