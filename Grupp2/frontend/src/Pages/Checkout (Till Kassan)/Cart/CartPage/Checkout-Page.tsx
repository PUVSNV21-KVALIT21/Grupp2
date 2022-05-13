import CartHeader from './Header/cart-header';
import CartSummery from './Shopping-Cart/Cart-Summery/cart-summery';
import ShoppingCartPage from './Shopping-Cart/shopping-cart';

function CheckoutPage() {
  return (
    <>
      <CartHeader />
      <div className="shopping-cart-page">
        <ShoppingCartPage />
        <CartSummery />
      </div>
    </>
  );
}

export default CheckoutPage;
