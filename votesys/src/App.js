import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SignUp from './Components/SignUp/SignUp';
import SignIn from './Components/SignIn/SignIn';
//import HomePage from './Components/HomePage';
<<<<<<< HEAD
//import { Switch } from '@material-ui/core';
=======
>>>>>>> 29692571f5519f859bdeacbdf818768a9936a132

export default class App extends React.Component{
  render(){
    const SignInComponent = () => <SignIn />;
<<<<<<< HEAD
    const SignUpComponent = () => <SignUp />;
=======
    const SignUpComponent = () => (<SignUp/>);
>>>>>>> 29692571f5519f859bdeacbdf818768a9936a132
    //const HomePageComponent = () => <HomePage />;

    return (
      <div className="App">
        <Router>
<<<<<<< HEAD
          <Route path='/' Component={SignInComponent}/>
          <Switch>
            <Route path='/signup' Component={SignUpComponent}/>
            {/* <Route path='/main' Component={HomePageComponent} /> */}
          </Switch>
=======
          <div>
            <Route exact path='/' render = {SignInComponent}></Route>
            <Route exact path='/signup' render = {SignUpComponent}></Route>
          </div>
{/* <Route path='/main' Component={HomePageComponent} /> */}
>>>>>>> 29692571f5519f859bdeacbdf818768a9936a132
        </Router>
      </div>
    );
  }
}

