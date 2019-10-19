import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SignUp from './Components/SignUp/SignUp';
import SignIn from './Components/SignIn/SignIn';
//import HomePage from './Components/HomePage';

export default class App extends React.Component{
  render(){
    const SignInComponent = () => <SignIn />;
    const SignUpComponent = () => (<SignUp/>);
    //const HomePageComponent = () => <HomePage />;

    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path='/' render = {SignInComponent}></Route>
            <Route exact path='/signup' render = {SignUpComponent}></Route>
          </div>
{/* <Route path='/main' Component={HomePageComponent} /> */}
        </Router>
      </div>
    );
  }
}

