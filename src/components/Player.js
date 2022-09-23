import React from 'react';
import { images, names } from '../utils/utils';
import Card from 'react-bootstrap/Card'

export function Player(props){
    return(
        <Card className='mx-1' bg='dark' text='white' onClick={props.handleClick} style={{ width: '15rem' }}>
            <Card.Img variant="top" src={images[props.team][props.role]} />
            <Card.Body>
                <Card.Title className='text-center'>{names[props.team][props.role]}</Card.Title>
            </Card.Body>
        </Card>
    );
}