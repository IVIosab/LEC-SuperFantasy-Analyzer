import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import {images, names} from './utils/utils.js'
import Card from 'react-bootstrap/Card'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      player: ""
    }
  }
  
  renderCard(team, role){
    return(
      <Card className='mx-1' bg='dark' text='white' style={{ width: '15rem' }}>
        <Card.Img variant="top" src={images[team][role]} />
        <Card.Body>
          <Card.Title className='text-center'>{names[team][role]}</Card.Title>
        </Card.Body>
      </Card>
    );
  }

  renderRowCards(team){
    let roles = ['Top', 'Jung', 'Mid', 'ADC', 'Supp', 'Coach'];
    let rowCards = []
    for(let i = 0 ; i < 6 ; i++){
      rowCards.push(this.renderCard(team, roles[i]))
    }
    return(
      <div className='row justify-center my-2'>{rowCards}</div>
    );
  }

  renderRows(){
    let teams = ['AST', 'BDS', 'FNC', 'G2', 'MAD', 'MSF', 'RGE', 'SK', 'VIT', 'XL']
    let rows = []
    for(let i = 0 ; i < 10 ; i++){
      rows.push(this.renderRowCards(teams[i]))
    }
    return(
      <div>{rows}</div>
    );
  }

  render(){
    let rows = this.renderRows()
    return (
      rows
    );
  }
}

export default App;
