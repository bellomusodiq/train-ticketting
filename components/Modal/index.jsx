import React from "react";
import Backdrop from "../Backdrop/Backdrop";
import styles from "./Modal.module.css";

const Modal = ({ open, children, onClose }) => {
  return (
    <>
      {open && <Backdrop onClose={onClose} />}
      <div
        className={styles.Modal}
        style={{ transform: open ? "translateY(0)" : "translateY(-100vh)" }}
      >
        {children}
      </div>
    </>
  );
};

export default Modal;
