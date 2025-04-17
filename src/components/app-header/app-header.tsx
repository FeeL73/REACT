import {
  Logo,
  ProfileIcon,
  BurgerIcon,
  ListIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import headerStyles from "./app-header.module.css";

const AppHeader = () => {
  return (
    <header className={`${headerStyles.header} `}>
      <div className={headerStyles.wrapper}>
        <div className={headerStyles.navWrapper}>
          <nav>
            <ul className={headerStyles.navMenu}>
              <li>
                <a href={"#"} className={`${headerStyles.link} `}>
                  <BurgerIcon type="primary" />
                  <span
                    className={`text text_type_main-default text_color_primary`}
                  >
                    {"Конструктор"}
                  </span>
                </a>
              </li>
              <li>
                <a href={"#"} className={`${headerStyles.link} `}>
                  <ListIcon type="secondary" />
                  <span
                    className={`text text_type_main-default text_color_inactive`}
                  >
                    {"Лента заказов"}
                  </span>
                </a>
              </li>
              <div>
                <div>
                  <div></div>
                </div>
              </div>
            </ul>
          </nav>
          <Logo />
        </div>
        <div className={headerStyles.profileAccount}>
          <a href={"#"} className={`${headerStyles.link} `}>
            <ProfileIcon type="secondary" />
            <span className={`text text_type_main-default ${true}`}>
              {"Личный кабинет"}
            </span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
