import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getSingleProduct } from '../../utils/data/productData';
import ProductCard from '../../components/Cards/ProductCard';

export default function ViewProductDetails() {
  const [productDetails, setProductDetails] = useState({});
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    getSingleProduct(id).then(setProductDetails);
  }, [id]);

  return (
    <div>
      <ProductCard productObj={productDetails} />
    </div>
  );
}
