import React from 'react';
import {Card, } from 'react-bootstrap';

class Cardcomp extends React.Component{
    render(){
        return(
            <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Title</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Some Caption</Card.Subtitle>
              <Card.Text>
                Some Descriptions
              </Card.Text>
            </Card.Body>
          </Card>
        )
    }
}
export default Cardcomp;