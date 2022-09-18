import React, { useState, useEffect } from 'react';
import {
  Nav, Navbar, NavDropdown, Container,
} from 'react-bootstrap';
import Headline from './componets/Headline';
import './App.css';

function App() {
  const [state, setState] = useState({
    articles: [],
    error: null,
    loading: false,
  });
  console.log(state.articles);
  const getArticles = async () => {
    const response = await fetch(
      'https://newsapi.org/v2/top-headlines?country=us&apiKey=5d30a5ab65764ba0a6694020cf885380',
    );
    const result = await response.json();

    if (result.status === 'ok') {
      setState({
        articles: result.articles,
        loading: true,
      });
    } else {
      setState({
        error: result.message,
        loading: true,
      });
    }
  };

  useEffect(() => {
    getArticles();
  }, []);
  if (state.error) {
    return (
      <div>
        Error:
        {state.error}
      </div>
    );
  }
  if (!state.loading) {
    return <div className="text-info">Loding...</div>;
  }
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Shi News</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Favorite</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <header className="App-header">
        <Headline />
      </header>
    </div>
  );
}

export default App;
