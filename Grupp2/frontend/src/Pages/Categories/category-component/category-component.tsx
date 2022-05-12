import { Link } from 'react-router-dom';
import './category-component-style.css';

/* eslint-disable rule-name */
function CategoryComponent({ icon, category }: { icon: any; category: string }) {
  return (
    <div className="category-wrapper">
      <Link id="category-link" to={'/' + category.toLocaleLowerCase()}>
        <li>
          <img src={icon}></img>
          <h1>{category}</h1>
        </li>
      </Link>
    </div>
  );
}
/* eslint-disable rule-name */

export default CategoryComponent;
