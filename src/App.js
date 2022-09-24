import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import {Team} from './components/Team.js'
import {NavBar} from './components/NavBar.js'
import PlayerStats from './components/PlayerStats';

class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      team: '',
      player: ''
    };
    this.handleSelect = this.handleSelect.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }
  
  handleSelect(key){
    this.setState({ 
      team: key
    });
  }

  handleClick(player){
    this.setState({
      player: player
    });
  }

  render(){
    return(
      <div className='row justify-content-md-center m-2'>
        <NavBar
          handleSelect={this.handleSelect}
        />
        {
          this.state.team!==""
          ?
          <Team
            handleClick={this.handleClick}
            team={this.state.team}
          />
          :
          null
        }
        {
          this.state.player!=="" 
          ? 
          <PlayerStats
            player={this.state.player}
          /> 
          : 
          null
        }
      </div>
    );  
  }
}

export default Home;
