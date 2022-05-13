import CategoryComponent from './category-component/category-component';
import babyicon from '../../assets/graphics/icons/baby-bottle.svg';
import box from '../../assets/graphics/icons/box.svg';
import chef from '../../assets/graphics/icons/chef.svg';
import cleaning from '../../assets/graphics/icons/cleaning.svg';
import vegan from '../../assets/graphics/icons/vegan.svg';
import soda from '../../assets/graphics/icons/soda-can.svg';
import soap from '../../assets/graphics/icons/soap.svg';
import organic from '../../assets/graphics/icons/organic-food.svg';
import cracker from '../../assets/graphics/icons/cracker.svg';

function Categories() {
  return (
    <div className="categories-page">
      <ul>
        <CategoryComponent icon={chef} category={'Skafferi'} />
        <CategoryComponent icon={babyicon} category={'Barn & Baby'} />
        <CategoryComponent icon={cleaning} category={'Hem & Städ'} />
        <CategoryComponent icon={organic} category={'Ekologisk mat'} />
        <CategoryComponent icon={vegan} category={'Veganskt'} />
        <CategoryComponent icon={soda} category={'Drycker'} />
        <CategoryComponent icon={box} category={'Storpack'} />
        <CategoryComponent icon={cracker} category={'Bröd, kex & kakor'} />
        <CategoryComponent icon={soap} category={'Hygien & apotek'} />
      </ul>
    </div>
  );
}

export default Categories;
