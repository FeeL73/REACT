import {
  Logo,
  ProfileIcon,
  BurgerIcon,
  ListIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import headerStyles from "./AppHeader.module.css";

interface HeaderButtonProps {
  link: string;
  icon: React.ElementType;
  text: string;
  active?: boolean;
}

const AppHeader = () => {
  // Функция для рендера кнопок
  const renderHeaderButton = ({
    link,
    icon: Icon,
    text,
    active = false,
  }: HeaderButtonProps) => {
    return (
      <a href={link} className={`${headerStyles.link} pt-4 pr-5 pb-4 pl-5`}>
        <Icon type={active ? "primary" : "secondary"} />
        <span
          className={`text text_type_main-default ${
            active ? "text_color_primary" : "text_color_inactive"
          }`}
        >
          {text}
        </span>
      </a>
    );
  };

  return (
    <header className={`${headerStyles.header} pt-4 pb-4`}>
      <div className={headerStyles.wrapper}>
        <div className={headerStyles.navWrapper}>
          <nav>
            <ul className={headerStyles.navMenu}>
              <li>
                {renderHeaderButton({
                  icon: BurgerIcon,
                  text: "Конструктор",
                  link: "#",
                  active: true,
                })}
              </li>
              <li>
                {renderHeaderButton({
                  icon: ListIcon,
                  text: "Лента заказов",
                  link: "#",
                })}
              </li>
            </ul>
          </nav>
          <Logo />
        </div>
        <div className={headerStyles.profileAccount}>
          {renderHeaderButton({
            icon: ProfileIcon,
            text: "Личный кабинет",
            link: "#",
          })}
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
