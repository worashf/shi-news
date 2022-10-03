import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Headline from './Headline';

const Favorite = () => {
  const favArray = JSON.parse(localStorage.getItem('favObj'));

  const getHeadline = (article, index) => {
    const {
      title, description, urlToImage, id,
    } = article;

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
    <Container fluid className="mt-3">
      <Row>{favArray.map(getHeadline)}</Row>
    </Container>
  );
};

export default Favorite;
