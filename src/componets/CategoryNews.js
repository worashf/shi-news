import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import { getNewsByCategory } from '../redux/articles/articles';
import Headline from './Headline';
/*  eslint-disable */

const CategoryNews = ({ category }) => {
  const data = useSelector((state) => state.articles.categoryNews);

  const dispatch = useDispatch();
  const data1 = dispatch(getNewsByCategory(category));
  console.log(data1, 'data');
  useEffect(() => {
    dispatch(getNewsByCategory(category));
  }, []);
  const getHeadline = (article, index) => {
    const { title, description, urlToImage, id } = article;

    return (
      <Col key={index} className="news-container">
        <Headline
          className="my-3 mx-auto news-container"
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
      <Row>{data.map(getHeadline)}</Row>
    </Container>
  );
};

export default CategoryNews;
