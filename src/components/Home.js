import CategoryList from "./CategoryList"
import IngredientsList from "./IngredientsList";

const Home = () => {
    return (
      <>
        {/* app bar
          - app name
          - navigation menu : add ingredient, add categoriy
        */}
        <CategoryList />
        <IngredientsList />
        {/* categories horizontal list */}
        {/* ingredients v list
          - ingredient image, name, 
          -search bar 
        */}
      {/* footer
        copyright wafa azzam
      */}
      </>

    );
  };
  
  export default Home;
  