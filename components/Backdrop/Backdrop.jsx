import React from "react";
import styles from "./Backdrop.module.css";

const Backdrop = ({ onClose, children }) => {
  return (
    <div onClick={onClose} className={styles.Backdrop}>
      {children}
    </div>
  );
};

export default Backdrop;
