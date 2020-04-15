import React from 'react';
import './App.css';
import Dashboard from './Dashboard';
import AppBar from "./AppBar"
import { Container, Row, Col } from 'react-grid';


function App() {
  return (
    <div>
      
      
      <Container fluid>
      <Row>
       <Col md={6}>
        <AppBar/>
        </Col>
      </Row>
      
        
    </Container>
    <Dashboard />
      
    </div>
  );
}

export default App;
