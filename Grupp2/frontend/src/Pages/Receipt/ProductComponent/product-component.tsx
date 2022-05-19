function Product({
  qty,
  title,
  price,
  totalPrice,
}: {
  qty: number;
  title: string;
  price: number;
  totalPrice: number;
}) {
  return (
    <div className="headers">
      <h4>{qty}</h4>
      <h4>{title}</h4>
      <h4>{price} kr</h4>
      <h4>{totalPrice} kr</h4>
    </div>
  );
}

export default Product;
