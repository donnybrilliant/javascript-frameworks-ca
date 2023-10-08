import ProductCard from "../ProductCard";
import { ProductGrid } from "./ProductList.styled";

const ProductList = ({ products }) => {
  return (
    <ProductGrid>
      {products.length === 0 ? (
        <h2>No Products Found</h2>
      ) : (
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      )}
    </ProductGrid>
  );
};

export default ProductList;
