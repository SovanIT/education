import React from 'react';
import {Link} from 'react-router-dom';
import { StorageUtil } from '../utils/StorageUtil';
import { questionAnswerDetails } from '../utils/localdata';

class QuestionAnswerInfo extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            data: '',
            userDetails: {},
        }
    }

    componentDidMount(){  
        StorageUtil.setItem('questionset', questionAnswerDetails);
        this.setState({data: StorageUtil.getItem('questionset')}); 
        this.setState({userDetails: StorageUtil.getItem('userDetails')});  
    }

    render(){
        return(
            <div className="card">
                <div className="card-header">
                <div className="row">
                <div className="col-md-6">
                    <h5 className="text-left margin-bottom-0">{this.state.userDetails.name} ( {this.state.userDetails.collageName} )</h5>
                </div>
                <div className="col-md-6">
                    <h5 className="text-right margin-bottom-0">{this.state.data.userId}</h5>
                </div>
                </div>
                </div>
                <div className="card-body">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h1>{this.state.data.questionPaperName}</h1>
                        
                    </div>
                </div>
                <div className="row">
                <div className="col-md-6 col-6">
                    <p>Paper Name : {this.state.data.questionPaperDescription}</p>
                    <p>Paper Type: {this.state.data.typeOfQuestionPaper}</p>
                </div>
                <div className="col-md-6 col-6 text-right">
                   <p>Time: {this.state.data.questionPaperTime} min</p>
                   <p>Paper Code: {this.state.data.questionPaperId}</p>
                </div>
                </div>
                    <h4>Important Instructions:-</h4>
                    <p>{this.state.data.questionPaperRules}</p>
                    <div className="row">
                    <div className="col-md-3 col-sm-9 col-9">
                    <table className="table table-bordered margin-bottom-0">
                        <thead>
                            <tr>
                                <th>No. of Questions</th>
                                <th>Total Marks</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            <tr>
                                <td>{this.state.data.totalNumberOfQuestion}</td>
                                <td>{this.state.data.totalMarks}</td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                    <div className="col-md-9 col-sm-3 col-3 text-right">
                       <Link to="/questions">
                         <button className="btn btn-success btn-sm position" >Start</button>
                       </Link>
                    </div>
                    </div>
                </div>
            </div>
        )
    }


}
export default QuestionAnswerInfo;