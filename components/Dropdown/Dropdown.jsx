import React from "react";
import styles from "./Dropdown.module.css";

const Dropdown = ({ children, show, title }) => {
  return (
    <div className={styles.Dropdown}>
      <div className={styles.DropdownHeader}>{title}</div>
      {show && <div className={styles.Container}>{children}</div>}
    </div>
  );
};

export default Dropdown;
