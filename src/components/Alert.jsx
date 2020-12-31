import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {Alert,Button } from 'react-bootstrap';

export default function AlertDismissibleExample() {
    const [show, setShow] = useState(true);
  
    if (show) {
      return (
        <Alert variant="warning" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>Sorry Pals!</Alert.Heading>
          <p>
            This Site is Under Construction. Please be Patient! I'm still working
            on this site, hopefully finished as soon as possible.
          </p>
        </Alert>
      );
    }
    return <div></div>;
  }
  