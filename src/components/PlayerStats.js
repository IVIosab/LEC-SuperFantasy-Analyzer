import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import React from 'react';

function PlayerStats(props) {
  return(
    <h1 className='row justify-content-md-center m-2'>{props.player}</h1>
  );  
}

export default PlayerStats;
