import { Link } from "react-router-dom";
import CartItemList from "./CartItemList/CartItemList";
import Breadcrumbs from "../Breadcrumbs";
import Button from "../Button";
import BackLink from "../BackLink";
import { getTotalPrice } from "../../utils";
import { CartContainer, StyledHeading, CheckoutContainer } from "./Cart.styled";

const Cart = ({ cart }) => {
  return (
    <CartContainer>
      {cart && cart?.length !== 0 && <Breadcrumbs />}
      <StyledHeading>
        <h1>Cart</h1>
        <BackLink>Continue Shopping</BackLink>
      </StyledHeading>
      {cart && cart?.length !== 0 ? (
        <>
          <CartItemList cart={cart} />
          <CheckoutContainer>
            <h3>Total Price: ${getTotalPrice(cart)}</h3>
            <p>Shipping calculated at checkout</p>
            <Link to="/checkout">
              <Button $proceed>Proceed to Checkout</Button>
            </Link>
          </CheckoutContainer>
        </>
      ) : (
        <h2>Your cart is empty.</h2>
      )}
    </CartContainer>
  );
};

export default Cart;