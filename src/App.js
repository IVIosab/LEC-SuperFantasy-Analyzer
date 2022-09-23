import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import {Team} from './components/Team.js'
import {NavBar} from './components/NavBar.js'


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      team: 'AST'
    };
    this.handleSelect = this.handleSelect.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }
  
  handleSelect(key){
    this.setState({ 
      team: key
    });
  }

  handleClick(){
    //route to playerStats
  }

  render(){
    let nav = <NavBar
      handleSelect={this.handleSelect}
    />
    let cardrow = <Team
      handleClick={this.handleClick}
      team={this.state.team}
    />
    return(
      <div className='row justify-content-md-center m-2'>
        {nav}
        {cardrow}
      </div>
    );  
  }
}

export default App;
