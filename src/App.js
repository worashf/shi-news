import React, { useEffect } from 'react';
import {
  Nav, Navbar, NavDropdown, Container, Row, Col,
} from 'react-bootstrap';

/* eslint-disable */
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Headline from './componets/Headline';
import FullArticle from './componets/FullArticle';
import { getArticles } from './redux/articles/articles';
import './App.css';

function App() {
  const articles = useSelector((state) => state.articles);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArticles());
  }, []);
  const getHeadline = (article, index) => {
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
                  <Row>{articles.map(getHeadline)}</Row>
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
