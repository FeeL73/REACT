import styles from "./ModalOverlay.module.css";
import PropTypes from "prop-types";
import React from "react";
// Определяем интерфейс для пропсов
interface ModalOverlayProps {
  onClose: () => void; // Указываем, что onClose - это функция без аргументов и ничего не возвращающая
}

// const ModalOverlay = ({ onClose }) => {
const ModalOverlay: React.FC<ModalOverlayProps> = ({ onClose }) => {
  return <div onClick={onClose} className={styles.overlay}></div>;
};

// ModalOverlay.propTypes = {
//   onClose: PropTypes.func.isRequired,
// };
ModalOverlay.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default ModalOverlay;
