import React, { Component } from 'react';
import '../assets/bootstrap/css/bootstrap.min.css';

class Question extends Component {

  render() {
    return (
        <div className="text-left margin-bottom-20">  
            {this.props.data}      
        </div>
    );
  }
}

export default Question;