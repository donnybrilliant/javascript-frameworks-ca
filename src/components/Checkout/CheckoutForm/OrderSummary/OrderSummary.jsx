import { getTotalPrice } from "../../../../utils";
import { Link } from "react-router-dom";
import { CartItem, OrderSummaryContainer } from "./OrderSummary.styled";

const OrderSummary = ({ cart }) => {
  return (
    <OrderSummaryContainer>
      <h2>Order Summary</h2>
      <ul>
        {cart.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id}>
            <CartItem>
              <img src={product.imageUrl} alt={product.title} />
              <div>
                <h3>{product.title}</h3>

                <p>
                  Price: <b>${product.discountedPrice}</b>
                </p>
                <p>
                  Quantity: <b>{product.quantity}</b>
                </p>
              </div>
            </CartItem>
          </Link>
        ))}
      </ul>

      <h4>Total Price: ${getTotalPrice(cart)}</h4>
    </OrderSummaryContainer>
  );
};

export default OrderSummary;