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
  
  render(){
    return (
      <div className='row justify-center my-4'>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={images['RGE']['Top']} />
          <Card.Body>
            <Card.Title className='text-center'>{names['RGE']['Top']}</Card.Title>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default App;
