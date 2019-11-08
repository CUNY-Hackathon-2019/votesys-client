import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SignUp from './Components/SignUp/SignUp';
import SignIn from './Components/SignIn/SignIn';
import Ledger from './Ledger';
import socket from './socket';

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.Ledger = new Ledger();
  }

  componentDidMount(){
    socket.on('updateLedger', (newblock) => {
      this.Ledger.add(newblock);
      this.Ledger.display();
    })
  }

  render(){
    const SignInComponent = () => <SignIn />;
    const SignUpComponent = () => <SignUp />;
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path='/' render = {SignInComponent}></Route>
            <Route exact path='/signup' render = {SignUpComponent}></Route>
          </div>
        </Router>
      </div>
    );
  }
}

