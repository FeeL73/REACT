import styles from "./BurgerIngredients.module.css";
import PropTypes from "prop-types";
import { useState, useRef } from "react";
import tabs from "../../utils/tabs";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientCard from "../IngredientCard/IngredientCard";
import ingredientsPropTypes from "../../utils/ingredientsPropTypes";

interface BurgerIngredientsProps {
  ingredients: any[]; // лучше указать свой тип вместо any
}

const BurgerIngredients = ({ ingredients }: BurgerIngredientsProps) => {
  const [current, setCurrent] = useState("one");

  const tabsTitle = {
    one: useRef<HTMLDivElement | null>(null),
    two: useRef<HTMLDivElement | null>(null),
    three: useRef<HTMLDivElement | null>(null),
  };

  // const handleTabClick = (value: keyof typeof tabsTitle) => {
  //   setCurrent(value);
  //   tabsTitle[value].current?.scrollIntoView();
  // };
  type TabKeys = "one" | "two" | "three";

  const handleTabClick = (value: TabKeys) => {
    setCurrent(value);
    tabsTitle[value].current?.scrollIntoView();
  };

  return (
    <section className={`${styles.burgerIngredients} pt-10`}>
      <h1 className="text text_type_main-large mb-10">Соберите бургер</h1>
      <div className={`${styles.tabContainer} mb-10`}>
        {tabs.map(({ id, typeName, value }) => (
          <Tab
            key={id}
            value={value}
            active={current === value}
            // onClick={() => handleTabClick(value)}
            onClick={() => handleTabClick(value as TabKeys)}
          >
            {typeName}
          </Tab>
        ))}
      </div>
      <div className={styles.ingredientsWrapper}>
        {tabs.map(({ id, type, typeName, value }) => (
          <div key={id} className={styles.ingredientContent}>
            <h2 ref={tabsTitle[value as TabKeys]}>{typeName}</h2>
            <div className={`${styles.ingredientsMenu} pt-6 pb-10 pl-4 pb-4`}>
              {ingredients
                .filter((card) => card.type === type)
                .map((ingredient) => (
                  <IngredientCard
                    data={ingredient}
                    key={ingredient._id}
                    image={ingredient.image}
                    price={ingredient.price}
                    ingredientName={ingredient.name}
                  />
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

BurgerIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientsPropTypes.isRequired),
};

export default BurgerIngredients;
