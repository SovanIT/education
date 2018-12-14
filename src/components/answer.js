import React, { Component } from 'react';
//import '../assets/bootstrap/css/bootstrap.min.css';

class Answer extends Component {

    constructor(props){
        super(props);
        this.state = {
            options: this.props.data
        }
    }
    
    changeOption = (event) => {
        const {changeOption} = this.props;
        changeOption(event.target.value, this.props.status);
    }
      
  render() {
    return (
        <form>
            <div className="text-left">
                <div className="row margin-top-bottom-10">
                    <div className="col-md-6 padding-left-0">
                        <input type="radio" name="option"
                        onChange={this.changeOption.bind(this)}
                        value = {this.state.options["1"]}
                        checked={(this.state.options['1'] === this.props.ans) ? "checked" : ""}
                        />&nbsp;
                        {this.state.options['1']}
                    </div>
                    <div className="col-md-6 padding-left-0">
                        <input type="radio" name="option"
                        onChange={this.changeOption}
                        value = {this.state.options['2']}
                        checked={(this.state.options['2'] === this.props.ans) ? "checked" : ""}
                        />&nbsp;
                        {this.state.options['2']}
                    </div>
                    <div className="col-md-6 padding-left-0">
                        <input type="radio"name="option" 
                        onChange={this.changeOption}
                        value = {this.state.options['3']}
                        checked={(this.state.options['3'] === this.props.ans) ? "checked" : ""}
                        />&nbsp;
                        {this.state.options['3']}
                    </div>
                    <div className="col-md-6 padding-left-0">
                        <input type="radio" name="option"
                        onChange={this.changeOption}
                        value = {this.state.options['4']}
                        checked={(this.state.options['4'] === this.props.ans) ? "checked" : ""}
                        />&nbsp;
                        {this.state.options['4']}
                    </div>
                </div>
            </div>
        </form>
    );
  }
}

export default Answer;