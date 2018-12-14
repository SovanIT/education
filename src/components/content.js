import React, { Component } from 'react';
import '../assets/bootstrap/css/bootstrap.min.css';
//import axios from 'axios';
import uniqueId from 'react-html-id';
import Question from './question';
import Answer from './answer';
import Save from './save';
import Timer from './timer';
import { StorageUtil } from '../utils/StorageUtil';
import { questionAnswerDetails } from '../utils/localdata';

class Content extends Component {
    constructor(props){
        super(props);
        this.state = {
            question: {},
            active: 1,
            answer: '',
            submit: false,
            time: 600
        }
        this.clickNext = this.clickNext.bind(this);
        this.clickPrev = this.clickPrev.bind(this);
        this.changeOption = this.changeOption.bind(this);
        this.timeRemaining = this.timeRemaining.bind(this);
        uniqueId.enableUniqueIds(this);
    }

    componentWillMount(){
        this.setState({question: StorageUtil.getItem('questionset').answerQuestions}); 
        //console.log(this.state.question);
    }

    timeRemaining (timeRemains) {
        alert('Times up!! ' + timeRemains);
        StorageUtil.setItem('questionset', questionAnswerDetails);
    }

    getQuestions = () => {
        return this.state.question;
    }
    
    clickNext(value){
        value = ++value;
        if(this.state.active < this.state.question.length){
            this.setState({active: value});
        }
    }

    clickPrev(value){
        value = --value;
        if(this.state.active > 1){
            this.setState({active: value});
        }
    }

    changeOption = (value, ques) => {
        this.setState({answer: value});
        let question = this.getQuestions();
        question = question.map(val => {
            if(val['answerQuestionId'] === ques){
                val['answer'] = value;
            }
            return val;
        });
        this.setState({question});
    }

    saveAnswer = (answer, ques) => {
        let question = this.getQuestions();
        question = question.map(val => {
            if(val['answerQuestionId'] === ques){
                val['isSaved'] = true;
            }
            return val;
        });
        this.setState({question});
        StorageUtil.setItem('questionSet', this.state.question);
    }

    clearAnswer = (ques) => {
        let question = this.getQuestions();
        question = question.map(val => {
            if(val['answerQuestionId'] === ques){
                val['isSaved'] = false;
                val['answer'] = "";
            }
            return val;
        });
        this.setState({question});
    }

    submit = () => {
        this.setState({submit: true})
        StorageUtil.setItem('questionSet', this.state.question);
        console.log(this.state.question);
    }

  render() {
    if(this.state.submit){
        return (<h1>result will be declared soon and all the best</h1>);
        }
    return (
        <div className="card">
            <div className="card-header">
            <div className="row">
            <div className="col-md-8 text-left"> 
            <h5 className="text-left margin-bottom-0">Question Number {this.state.active} </h5>
            </div>
            <div className="col-md-4">
            <div className="row">
            <h5 className="col-md-3 border border-danger rounded margin-bottom-0 text-center">{this.state.active} / {this.state.question.length}</h5>
            <h5 className="col-md-9 text-right margin-bottom-0">
            <Timer seconds = {this.state.time} timeRemaining = {this.timeRemaining} /> 
            </h5>
            </div>
            </div>
            </div>
            </div>
            <div className="card-body">
                {
                    this.state.question.map( ques => {
                        if(ques['answerQuestionId'] === this.state.active){
                            return (
                             
                            <div key={ques['answerQuestionId']}>
                            <Question 
                            key = {ques['answerQuestionId']}
                            data = {ques['questionText']} />
                            
                            <Answer 
                            key = {this.nextUniqueId()}
                            ans = {ques['answer']}
                            save = {ques['isSaved']}
                            status = {this.state.active}
                            data = {ques['options']}
                            changeOption = {this.changeOption}
                            />
                            </div>);
                        }
                        return "";
                    })
                }

                <Save key = {this.state.question['answerQuestionId']}
                answer = {this.state.answer}
                status = {this.state.active}
                length = {this.state.question.length}
                clickNext = {this.clickNext}
                clickPrev = {this.clickPrev}
                saveAnswer = {this.saveAnswer}
                clearAnswer = {this.clearAnswer}
                submit = {this.submit} />
            </div>
        </div>
    );
  }
}

export default Content;