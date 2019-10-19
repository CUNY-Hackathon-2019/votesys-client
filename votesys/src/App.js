import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SignUp from './Components/SignUp/SignUp';
import SignIn from './Components/SignIn/SignIn';
import HomePage from './Components/HomePage';
import { Switch } from '@material-ui/core';

export default class App extends React.Component{

  
  render(){
    const SignInComponent = () => <SignIn />;
    const SignUpComponent = () => <SignUp />;
    const HomePageComponent = () => <HomePage />;

    return (
      <div className="App">
        <Router>
          <Route path='/' Component={SignInComponent}/>
          <Switch>
            <Route path='/signup' Component={SignUpComponent}/>
            <Route path='/main' Component={HomePageComponent} />
          </Switch>
        </Router>
      </div>
    );
  }
  
}

