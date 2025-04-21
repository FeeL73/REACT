import { useState, useEffect } from "react";
import AppHeader from "../AppHeader/AppHeader";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import ingredientsPropTypes from "../../utils/ingredientsPropTypes";
import styles from "../App/App.module.css";
import PropTypes from "prop-types";

function App() {
  const API_URL = "https://norma.nomoreparties.space/api/ingredients";
  const [ingredients, setIngredients] = useState<any[]>([]);

  useEffect(() => {
    const fetchIngredients = async () => {
      try {
        const response = await fetch(API_URL);
        if (response.ok) {
          const data = await response.json();
          setIngredients(data.data);
        } else {
          throw new Error(`Oops! It seems your link ${API_URL} is broken`);
        }
      } catch (error) {
        console.error("Error when executing the request:", error);
      }
    };

    fetchIngredients();
  }, []);

  return (
    <>
      <AppHeader />
      <main className={styles.mainContainer}>
        <div className={`${styles.contentWrapper} pb-10 pl-5`}>
          <BurgerIngredients ingredients={ingredients} />
          <BurgerConstructor ingredients={ingredients} />
        </div>
      </main>
    </>
  );
}

App.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientsPropTypes.isRequired),
};

export default App;
