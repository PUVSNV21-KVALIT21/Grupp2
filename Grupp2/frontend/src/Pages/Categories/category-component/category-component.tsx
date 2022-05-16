import { Link } from 'react-router-dom';
import './category-component-style.css';

/* eslint-disable @typescript-eslint/no-explicit-any */
function CategoryComponent({
  icon,
  category,
}: {
  icon: string;
  category: string;
}) {
  return (
      <div className="category-wrapper">
          <form id="category-link" method="get" action="/category" >
              <input type="hidden" name="q" value={category} />
              <button>
                  <li>
                      <img src={icon}></img>
                      <h1>{category}</h1>
                  </li>
              </button>
          </form>
      </div>
  );
}
/* eslint-disable @typescript-eslint/no-explicit-any */

export default CategoryComponent;
