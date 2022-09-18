import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const Headline = ({
  title, description, urlToImage, article,
}) => {
  console.log(article);
  return (
    <div>
      <Card style={{ width: '23rem' }} className="mt-2">
        <Card.Img
          variant="top"
          src={urlToImage}
          style={{ width: '100%', height: '15rem' }}
        />
        <Card.Body>
          <Card.Title>{title ? title.substr(0, 50) : ''}</Card.Title>
          <Card.Text>{description ? description.substr(0, 60) : ''}</Card.Text>
          <Link
            to={{
              pathname: '/full-article',
              state: {
                title,
              },
            }}
          >
            {' '}
            Read More
          </Link>
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
