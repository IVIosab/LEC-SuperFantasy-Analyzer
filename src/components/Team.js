import React from 'react';
import { Player } from './Player';

export function Team(props){
    let roles = ['Top', 'Jung', 'Mid', 'ADC', 'Supp', 'Coach'];
    let rowCards = []
    for(let i = 0 ; i < 6 ; i++){
      rowCards.push(
        <Player
          handleClick={props.handleClick}
          team={props.team}
          role={roles[i]}
        />
      )
    }
    return(
      <div className='row justify-content-md-center my-2'>{rowCards}</div>
    );
}