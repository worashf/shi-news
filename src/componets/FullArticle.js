import React from 'react';
import { useLocation } from 'react-router-dom';

const FullArticle = () => {
  const location = useLocation();
  console.log('test:', location);

  return (
    <>
      <h3>{location.state.article.title}</h3>
      <p />
      <p />
    </>
  );
};

export default FullArticle;
