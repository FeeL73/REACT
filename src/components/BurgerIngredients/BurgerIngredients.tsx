import styles from "./BurgerIngredients.module.css";
import PropTypes from "prop-types";
import { useState, useRef } from "react";
import tabs from "../../utils/tabs";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../Modal/Modal";
import ingredientsPropTypes from "../../utils/ingredientsPropTypes";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";

interface Ingredient {
  _id: string;
  name: string;
  type: string;
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  price: number;
  image: string;
  image_mobile: string;
  image_large: string;
}

interface BurgerIngredientsProps {
  ingredients: Ingredient[];
}

const BurgerIngredients = ({ ingredients }: BurgerIngredientsProps) => {
  const [current, setCurrent] = useState("one");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIngredient, setSelectedIngredient] =
    useState<Ingredient | null>(null);

  const tabsTitle = {
    one: useRef<HTMLDivElement | null>(null),
    two: useRef<HTMLDivElement | null>(null),
    three: useRef<HTMLDivElement | null>(null),
  };

  type TabKeys = "one" | "two" | "three";

  const handleTabClick = (value: TabKeys) => {
    setCurrent(value);
    tabsTitle[value].current?.scrollIntoView();
  };

  const openIngredientDetails = (ingredient: Ingredient) => {
    setSelectedIngredient(ingredient);
    setIsOpen(true);
  };

  const closeIngredientDetails = () => {
    setIsOpen(false);
    setSelectedIngredient(null);
  };

  const detailsList = selectedIngredient
    ? [
        {
          id: 1,
          detailValue: selectedIngredient.calories,
          detailText: "Калории,ккал",
        },
        {
          id: 2,
          detailValue: selectedIngredient.proteins,
          detailText: "Белки, г",
        },
        { id: 3, detailValue: selectedIngredient.fat, detailText: "Жиры, г" },
        {
          id: 4,
          detailValue: selectedIngredient.carbohydrates,
          detailText: "Углеводы, г",
        },
      ]
    : [];

  return (
    <section className={`${styles.burgerIngredients} pt-10`}>
      <h1 className="text text_type_main-large mb-10">Соберите бургер</h1>
      <div className={`${styles.tabContainer} mb-10`}>
        {tabs.map(({ id, typeName, value }) => (
          <Tab
            key={id}
            value={value}
            active={current === value}
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
                .filter((ingredient) => ingredient.type === type)
                .map((ingredient) => (
                  <div
                    key={ingredient._id}
                    className={styles.ingredientCard}
                    onClick={() => openIngredientDetails(ingredient)}
                  >
                    <Counter
                      count={0}
                      size="default"
                      extraClass={styles.counter}
                    />
                    <img
                      src={ingredient.image}
                      alt={`Ингридиент: ${ingredient.name}`}
                    />
                    <div className={styles.ingredientPrice}>
                      <span className="text text_type_digits-medium">
                        {ingredient.price}
                      </span>
                      <CurrencyIcon type="primary" />
                    </div>
                    <h3
                      className={`${styles.ingredientName} text text_type_main-default`}
                    >
                      {ingredient.name}
                    </h3>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>

      {isOpen && selectedIngredient && (
        <Modal title="Детали ингредиента" onClose={closeIngredientDetails}>
          <div className={styles.detailsWrapper}>
            <img
              className={styles.image}
              src={selectedIngredient.image_large}
              alt={`Ингридиент: ${selectedIngredient.name}`}
            />
            <h4 className="text text_type_main-medium mt-4 mb-8">
              {selectedIngredient.name}
            </h4>
            <div className={styles.detailsWrapper}>
              <ul className={styles.detailsList}>
                {detailsList.map((detail) => (
                  <li key={detail.id}>
                    <div className={styles.detail}>
                      <p className="text text_type_main-default text_color_inactive">
                        {detail.detailText}
                      </p>
                      <span className="text text_type_main-default text_color_inactive">
                        {detail.detailValue}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
};

BurgerIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientsPropTypes.isRequired),
};

export default BurgerIngredients;
