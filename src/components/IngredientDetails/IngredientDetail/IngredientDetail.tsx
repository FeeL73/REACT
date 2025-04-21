import styles from "./IngredientDetail.module.css";

interface IngredientDetailProps {
  detailValue: number;
  detailText: string;
}

const IngredientDetail = ({
  detailValue,
  detailText,
}: IngredientDetailProps) => {
  return (
    <div className={styles.detail}>
      <p className="text text_type_main-default text_color_inactive">
        {detailText}
      </p>
      <span className="text text_type_main-default text_color_inactive">
        {detailValue}
      </span>
    </div>
  );
};

export default IngredientDetail;
