import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

export default function ProductCard({ productObj }) {
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={productObj.imgUrl} alt={productObj.name} style={{ height: '400px' }} />
      <Card.Body>
        <Card.Title>{productObj.name}</Card.Title>
        <Card.Text>{productObj.description}</Card.Text>
        <Card.Text>{productObj.price}</Card.Text>
        <Card.Text>Category: {productObj.category ? productObj.category.title : 'No Category'}</Card.Text>
      </Card.Body>
    </Card>
  );
}

ProductCard.propTypes = {
  productObj: PropTypes.shape({
    name: PropTypes.string,
    imgUrl: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    category: PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
    }),
  }).isRequired,
};
