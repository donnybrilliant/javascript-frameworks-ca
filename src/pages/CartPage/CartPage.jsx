import useCart from "../../hooks/useCart";
import Cart from "../../components/Cart";

const CartPage = () => {
  const { cart, clearCart } = useCart();
  document.title = "Cart | Shop";
  return <Cart cart={cart} clearCart={clearCart} />;
};

export default CartPage;