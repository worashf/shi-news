import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
/*  eslint-disable */
const FullArticle = (props) => {
  const { id } = useParams();
  console.log(id);
  return (
    <>
      <h3>{id}</h3>
      <p />
      <p />
    </>
  );
};

FullArticle.propTypes = {
  title: PropTypes.string.isRequired,
};
export default FullArticle;
