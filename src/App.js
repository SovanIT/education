import React, { Component } from 'react';
import './assets/bootstrap/css/bootstrap.min.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import './App.css';
import {routes} from './routes';
import Header from './components/header';
import Footer from './components/footer';



class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      count: false
    }
  }

  render() {
    return (
      <div>
      <Header />
      <BrowserRouter>
         <Switch>
           {
              routes.map((route )=>{
                return(<Route path={route.path} exact component={route.component} key = {route.component}></Route>);
              })
           }   
         </Switch>
      </BrowserRouter>
      <Footer />
      </div>
    );
  }
}

export default App;