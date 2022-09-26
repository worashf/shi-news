import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

/* eslint-disable */

const Headline = ({ title, description, urlToImage, article, id }) => {
  return (
    <div>
      <Card style={{ width: '23rem' }} className="mt-2">
        <Card.Img
          variant="top"
          src={urlToImage}
          style={{ width: '100%', height: '15rem' }}
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {description ? `${description.substr(0, 60)}...` : ''}
          </Card.Text>
          <Link to={`/full-article/${id}`}> Read More</Link>
        </Card.Body>
      </Card>
    </div>
  );
};
Headline.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  urlToImage: PropTypes.string.isRequired,
  article: PropTypes.objectOf(PropTypes.string).isRequired,
};
export default Headline;
