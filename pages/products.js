import { useEffect, useState } from 'react';
import { getAllProducts } from '../utils/data/productData';
import ProductCard from '../components/Cards/ProductCard';

export default function ShowAllProducts() {
  const [products, setProducts] = useState([]);
  const showProducts = () => {
    getAllProducts()?.then(setProducts);
  };

  useEffect(() => {
    showProducts();
  }, [products]);

  return (
    <div id="product-page-div">
      <h1 className="h1"> Products </h1><br />
      <div>
        <div id="products-container">
          {products.map((product) => (
            <ProductCard key={product.id} productObj={product} onUpdate={showProducts} />
          ))}
        </div>
      </div>
    </div>
  );
}
