import React, {useState} from 'react';
import {Container,Navbar } from 'react-bootstrap';

class Navibar extends React.Component{
    render(){
        return(
        <div>
            <Navbar expand="lg" variant="light" bg="light">
            <Navbar.Brand href="#">Welcome to My Page!</Navbar.Brand>
            </Navbar>
        </div>
        )
    }
}
export default Navibar;