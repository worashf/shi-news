import React, { useEffect } from 'react';
import {
  Nav, Navbar, Container, Row, Col,
} from 'react-bootstrap';

/* eslint-disable */
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Headline from './componets/Headline';
import FullArticle from './componets/FullArticle';
import { getArticles } from './redux/articles/articles';
import './App.css';

function App() {
  const data = useSelector((state) => state.articles);
  const { articles, loading, error } = data;

  const dispatch = useDispatch();
  console.log(articles, 'text');
  useEffect(() => {
    dispatch(getArticles());
  }, []);
  const getHeadline = (article, index) => {
    const { title, description, urlToImage, id } = article;

    if (loading) {
      return <div className="text-info"> loadding...</div>;
    } else if (error) {
      return <div className="text-danger"> Something is wrong</div>;
    } else {
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
    }
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
