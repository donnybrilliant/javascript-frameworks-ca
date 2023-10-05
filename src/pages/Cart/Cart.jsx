import { Link } from "react-router-dom";
import { getTotalPrice } from "../../utils";
import Button from "../../components/Button";
import Breadcrumbs from "../../components/Breadcrumbs";
import {
  StyledDiv,
  Quantity,
  StyledHeading,
  StyledLink,
  CartContainer,
  CartControls,
  ImageContainer,
  HeadingContainer,
  TextContainer,
  ProductContainer,
} from "./Cart.styled";

const CartPage = ({ cart, updateProductQuantity }) => {
  return (
    <main>
      <CartContainer>
        {cart && cart?.length !== 0 && <Breadcrumbs />}

        <StyledHeading>
          <h1>Cart</h1>
          <StyledLink to={"/"}>Continue Shopping</StyledLink>
        </StyledHeading>
        {cart && cart?.length !== 0 ? (
          <>
            <ul>
              {cart.map((product) => (
                <ProductContainer key={product.id}>
                  <ImageContainer>
                    <img src={product.imageUrl} alt={product.title} />
                  </ImageContainer>

                  <HeadingContainer>
                    <h2>
                      <Link to={`/product/${product.id}`}>{product.title}</Link>
                    </h2>
                  </HeadingContainer>
                  <TextContainer>
                    <p>
                      Price: <b>${product.discountedPrice}</b>
                    </p>
                    {product.price - product.discountedPrice !== 0 && (
                      <p>
                        Discount:{" "}
                        <b>${product.price - product.discountedPrice}</b>
                      </p>
                    )}
                    {product.quantity > 0 && (
                      <p>
                        Total Price for this Item: $
                        {(product.quantity * product.discountedPrice).toFixed(
                          2
                        )}
                      </p>
                    )}
                  </TextContainer>

                  <CartControls>
                    <Link to={`/product/${product.id}`}>
                      <Button>View Product</Button>
                    </Link>
                    <Quantity>
                      <p>
                        Quantity: <b>{product.quantity}</b>
                      </p>
                      <div>
                        <Button
                          onClick={() =>
                            updateProductQuantity(
                              product.id,
                              product.quantity - 1
                            )
                          }
                        >
                          -
                        </Button>
                        <Button
                          onClick={() =>
                            updateProductQuantity(
                              product.id,
                              product.quantity + 1
                            )
                          }
                        >
                          +
                        </Button>
                      </div>
                    </Quantity>
                  </CartControls>
                </ProductContainer>
              ))}
            </ul>
            <StyledDiv>
              <h3>Total Price: ${getTotalPrice(cart)}</h3>
              <p>Shipping calculated at checkout</p>
              <Link to="/checkout">
                <Button>Proceed to Checkout</Button>
              </Link>
            </StyledDiv>
          </>
        ) : (
          <h2>Your cart is empty.</h2>
        )}
      </CartContainer>
    </main>
  );
};

export default CartPage;
