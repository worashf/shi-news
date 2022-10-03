import React from 'react';
import PropTypes from 'prop-types';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button, Card } from 'react-bootstrap';
/*  eslint-disable */

const FullArticle = () => {
  const { id } = useParams();
  const articles = useSelector((state) => state.articles.articles);
  const article = articles.find((a) => a.id === id);
  const { title, description, urlToImage, author, url, content } = article;
  return (
    <div className="container">
      <Link to="/" className="btn btn-primary my-3">
        Back{' '}
      </Link>
      <Card>
        <Card.Img variant="top" src={urlToImage} className="blog-img" />
        <Card.Body>
          <Card.Title className="text-primary title ">{title}</Card.Title>
          <Card.Text className="author">
            {' '}
            <span className="text-info">BY: </span>
            {author}
          </Card.Text>
          <Card.Text>{description}</Card.Text>
          <Card.Text className="text-muted">{content}</Card.Text>

          <Button variant="info">
            <a style={{ color: 'white' }} href={url}>
              Source
            </a>
          </Button>
          <Button className="mx-3 btn btn-md">Save favorite</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

FullArticle.propTypes = {
  title: PropTypes.string.isRequired,
};
export default FullArticle;
