import React, { Component } from 'react';
import { StorageUtil } from '../utils/StorageUtil';
import {Link} from 'react-router-dom';

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
        userDetails: {
                name: '',
                email: '',
                collageName: ''
            }
        }
    }

    changeField = (event) => {
        //let value = event.target.value
        let userDetails = this.state.userDetails
        userDetails[event.target.name] = event.target.value
        this.setState({ userDetails })
       // console.log(this.state.userDetails)
    }

    submitDetails = (event) =>{
        event.preventDefault();
        //console.log(this.state.userDetails);
        StorageUtil.setItem('userDetails', this.state.userDetails);
        //window.location.href='/info';
        console.log(this.state.userDetails);
    }


    render() {

        return (
            <form onSubmit={this.submitDetails.bind(this)}>
                <div className="col-md-4 offset-md-4">
                    <div className="card">
                        <div className="card-header">
                            Enter Below Details
                </div>
                        <div className="card-body">
                            <div className="form-group">
                                <label>Full Name</label>
                                <input type="text" className="form-control" 
                                name='name' value={this.state.userDetails.name} 
                                onChange={this.changeField.bind(this)} />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="text" className="form-control" 
                                name='email' onChange={this.changeField.bind(this)} />
                            </div>
                            <div className="form-group">
                                <label>Name of Collage</label>
                                <input type="text" className="form-control" 
                                name='collageName' 
                                onChange={this.changeField.bind(this)} />
                            </div>
                            <div className="text-right">
                                    <button type="submit" 
                                    className="btn btn-success btn-sm">Submit
                                    </button>
                                    <Link to = "/info">
                                    <button type="submit" 
                                    className="btn btn-info btn-sm">Next
                                    </button>
                                    </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        );
    }

}

export default Form;