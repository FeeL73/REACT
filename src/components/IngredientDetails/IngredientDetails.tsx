import styles from "./IngredientDetails.module.css";
import IngredientDetail from "./IngredientDetail/IngredientDetail";

interface Ingredient {
  name: string;
  image_large: string;
  calories: number;
  proteins: number;
  fat: number;
  carbohydrates: number;
}

interface IngredientDetailsProps {
  item: Ingredient;
}

const IngredientDetails = ({ item }: IngredientDetailsProps) => {
  const detailsList = [
    {
      id: 1,
      detailValue: item.calories,
      detailText: "Калории,ккал",
    },
    {
      id: 2,
      detailValue: item.proteins,
      detailText: "Белки, г",
    },
    {
      id: 3,
      detailValue: item.fat,
      detailText: "Жиры, г",
    },
    {
      id: 4,
      detailValue: item.carbohydrates,
      detailText: "Углеводы, г",
    },
  ];

  return (
    <div className={styles.detailsWrapper}>
      <img
        className={styles.image}
        src={item.image_large}
        alt={`Ингридиент: ${item.name}`}
      />
      <h4
        className={`${styles.ingredientName} text text_type_main-medium mt-4 mb-8`}
      >
        {item.name}
      </h4>
      <div className={styles.detailsWrapper}>
        <ul className={styles.detailsList}>
          {detailsList.map((detail) => (
            <li key={detail.id}>
              <IngredientDetail
                detailValue={detail.detailValue}
                detailText={detail.detailText}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default IngredientDetails;
