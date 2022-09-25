import React, { useState, useEffect } from 'react';
import {
  Nav, Navbar, NavDropdown, Container, Row, Col,
} from 'react-bootstrap';

import {
  BrowserRouter as Router, Routes, Route, Link,
} from 'react-router-dom';
import Headline from './componets/Headline';
import FullArticle from './componets/FullArticle';
import './App.css';

/* eslint-disable */
function App() {
  const [state, setState] = useState({
    articles: [],
    error: null,
    loading: false,
  });
  console.log(state.articles);
  const getArticles = async () => {
    const response = await fetch(
      'https://newsapi.org/v2/top-headlines?country=us&apiKey=5d30a5ab65764ba0a6694020cf885380'
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
  const getHeadline = (article, index) => {
    article.id = Math.random();
    const { title, description, urlToImage, id } = article;

    return (
      <Col key={index}>
        <Headline
          className="my-3"
          title={title}
          description={description}
          urlToImage={urlToImage}
          article={article}
          id={id}
        />
      </Col>
    );
  };

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
    <Router>
      <div className="App">
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand>
              {' '}
              <Link to="/">Shi News </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link>
                  {' '}
                  <Link to="/">Home</Link>
                </Nav.Link>{' '}
                <Nav.Link>
                  {' '}
                  <Link to="/favorite">Favorite</Link>
                </Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item>Action</NavDropdown.Item>
                  <NavDropdown.Item>Another action</NavDropdown.Item>
                  <NavDropdown.Item>Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item>Separated link</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <header className="App-header ">
          <Routes>
            <Route
              path="/"
              element={
                <Container fluid className="mt-3">
                  <Row>{state.articles.map(getHeadline)}</Row>
                </Container>
              }
            >
              {' '}
            </Route>
            <Route path="/full-article/:id" element={<FullArticle />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
