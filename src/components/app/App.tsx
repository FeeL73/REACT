import React from "react";
import { data } from "../../utils/data";
import AppHeader from "../app-header/app-header";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";

function App() {
  return (
    <>
      <AppHeader />
      <div style={{ display: "flex", margin: "50px" }}>
        <div style={{ width: "50%" }}>
          <BurgerConstructor />
        </div>
        <div style={{ width: "50%" }}>
          <BurgerIngredients />
        </div>
      </div>
    </>
  );
}

export default App;
