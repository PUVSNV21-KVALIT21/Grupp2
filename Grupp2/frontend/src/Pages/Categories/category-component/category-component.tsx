import { Link } from 'react-router-dom';
import './category-component-style.css';

function CategoryComponent({ icon, category }: { icon: any; category: string }) {
  return (
    <div className="category-wrapper">
      <Link to={'/' + category.toLocaleLowerCase()}>
        <li>
          <img src={icon}></img>
          <h1>{category}</h1>
        </li>
      </Link>
    </div>
  );
}

export default CategoryComponent;
