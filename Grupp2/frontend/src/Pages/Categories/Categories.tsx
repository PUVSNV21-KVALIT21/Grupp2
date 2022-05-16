import CategoryComponent from './category-component/category-component';
import { getCategories } from '../../Helper/ApiHelper';
import { Category } from '../../Models';
import React from 'react';

async function loadCategories() {
  let categoryResp: Category[] = [];
  const resp = await getCategories();
  categoryResp = resp;

  return categoryResp;
}

function Categories() {
  const [categories, setCategories] = React.useState<Category[]>([]);
  React.useEffect(() => {
    setCategories([]);
    loadCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);
  console.log(categories);
  return (
    <div className="categories-page">
      {categories.map(c => {
        return <CategoryComponent
          key={c.name}
          icon={c.imageLink}
          category={c.name} />;
      })}
    </div>
  );
}

export default Categories;
