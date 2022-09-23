import React from 'react';
import Nav from 'react-bootstrap/Nav'
import {NavItem} from './NavItem'

export function NavBar(props){
    let teams = ['AST', 'BDS', 'FNC', 'G2', 'MAD', 'MSF', 'RGE', 'SK', 'VIT', 'XL']
    let items = [];
    for(let i=0 ; i<10 ; i++){
        items.push(
            <NavItem
                team={teams[i]}
            />
        )
    }
    return (
      <Nav justify onSelect={props.handleSelect} variant="pills" defaultActiveKey="AST">
        {items}
      </Nav>
    );
}