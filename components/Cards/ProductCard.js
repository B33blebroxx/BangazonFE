import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';
import Link from 'next/link';

export default function ProductCard({ productObj }) {
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={productObj.imgUrl} alt={productObj.name} style={{ height: '400px' }} />
      <Card.Body>
        <Card.Title className="card-title">{productObj.name}</Card.Title>
        <Card.Text className="card-text">{productObj.description}</Card.Text>
        <Card.Text className="card-text">{productObj.price}</Card.Text>
        <Card.Text className="card-text">Category: {productObj.category ? productObj.category.title : 'No Category'}</Card.Text>
        <Card.Footer className="card-footer"><Button><Link href={`/product/${productObj.id}`}>Details</Link></Button></Card.Footer>
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
    id: PropTypes.number,
    category: PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
    }),
  }).isRequired,
};
