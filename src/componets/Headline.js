import React from 'react';
import PropTypes from 'prop-types';

import { Button, Card } from 'react-bootstrap';

const Headline = ({ title, description, urlToImage }) => (
  <div>
    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={urlToImage} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  </div>
);
Headline.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  urlToImage: PropTypes.string.isRequired,
};
export default Headline;
