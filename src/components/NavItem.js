import React from 'react';
import Nav from 'react-bootstrap/Nav'

export function NavItem(props){
    return(
        <Nav.Item>
          <Nav.Link eventKey={props.team}>{props.team}</Nav.Link>
        </Nav.Item>
    );    
}