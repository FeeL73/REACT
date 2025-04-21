import ingredientStyle from "./IngredientCard.module.css";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";

import { useState } from "react";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import Modal from "../Modal/Modal";

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

interface IngredientCardProps {
  data: Ingredient;
  image: string;
  price: number;
  ingredientName: string;
}

// const IngredientCard = ({ data, image, price, ingredientName }) => {
const IngredientCard = ({
  data,
  image,
  price,
  ingredientName,
}: IngredientCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className={ingredientStyle.ingredientCard}
      >
        <Counter
          count={0}
          size="default"
          extraClass={ingredientStyle.counter}
        />
        <img src={image} alt={`Ингридиент: ${ingredientName}`} />
        <div className={ingredientStyle.ingredientPrice}>
          <span className="text text_type_digits-medium">{price}</span>
          <CurrencyIcon type="primary" />
        </div>
        <h3
          className={`${ingredientStyle.ingredientName} text text_type_main-default`}
        >
          {ingredientName}
        </h3>
      </div>
      {isOpen && (
        <Modal
          title="Детали ингредиента"
          onClose={() => isOpen && setIsOpen(false)}
        >
          <IngredientDetails item={data} />
        </Modal>
      )}
    </>
  );
};

export default IngredientCard;
