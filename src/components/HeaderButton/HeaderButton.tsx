import styles from "./HeaderButton.module.css";
// import PropTypes from "prop-types";

interface HeaderButtonProps {
  link: string;
  icon: React.ElementType;
  text: string;
  active?: boolean;
}

// const HeaderButton = ({ link, icon, text, active = false }) => {
const HeaderButton = ({
  link,
  icon,
  text,
  active = false,
}: HeaderButtonProps) => {
  const Icon = icon;
  return (
    <a href={link} className={`${styles.link} pt-4 pr-5 pb-4 pl-5`}>
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

export default HeaderButton;
