import products from '../assets/data.json';

function Products(query: any) {
  return (
    <ul>
      {products.map((item) => (
        <li key={item.id}>
          <h1>{item.Title}</h1>
        </li>
      ))}
    </ul>
  );
}

export default Products;
