import CategoryComponent from './category-component/category-component';
import babyicon from '../../assets/graphics/icons/baby-bottle.svg';
import boxicon from '../../assets/graphics/icons/box.svg';
import food from '../../assets/graphics/icons/chef.svg';
import cleaning from '../../assets/graphics/icons/cleaning.svg';

function Categories() {
  return (
    <div className="categories-page">
      <ul>
        <CategoryComponent icon={babyicon} category={'Barnprodukter'} />
        <CategoryComponent icon={boxicon} category={'Box'} />
        <CategoryComponent icon={food} category={'Kitchen'} />
        <CategoryComponent icon={cleaning} category={'Cleaning'} />
      </ul>
    </div>
  );
}

export default Categories;
