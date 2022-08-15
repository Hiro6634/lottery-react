import React from 'react';
// import logo from './logo.svg';
// import web3 from './web3'; 
import lottery from './lottery';

import './App.css';

class App extends React.Component {

  state = { manager: ''};

  async componentDidMount(){
    let manager;

    console.log('ComponentDidMount');

    try{
      manager = await lottery.methods.manager().call();
      console.log('Manager:',manager);
    } catch (error){
      console.error(error);
    }
    // const manager = await lottery.methods.manager().call();

    this.setState({ manager });
  }

  render(){
    // console.log('WEB3 Version:' , web3.version);
    // web3.eth.getAccounts().then(console.log);
    return (
      <div>
        <h2>Lottery Contract</h2>
        <p>This contract is managed by {this.state.manager}</p>
      </div>
    );
  }
}

export default App;
