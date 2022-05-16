import { Link } from 'react-router-dom';
import './category-component-style.css';

/* eslint-disable @typescript-eslint/no-explicit-any */
function CategoryComponent({ icon, category }: { icon: string; category: string }) {
  return (
    <div className="category-wrapper">
      <Link id="category-link" to={'/' + category.toLocaleLowerCase()}>
        <li>
          <img src={icon} alt={category}></img>
          <h1>{category}</h1>
        </li>
      </Link>
    </div>
  );
}
/* eslint-disable @typescript-eslint/no-explicit-any */

export default CategoryComponent;
