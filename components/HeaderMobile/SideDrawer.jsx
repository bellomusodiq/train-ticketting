import Link from "next/link";
import React from "react";
import styles from "./HeaderMobile.module.css";

const SideDrawer = ({ open, onClose }) => {
  return (
    <>
      <div
        style={{ display: open ? "block" : "none" }}
        className={styles.Backdrop}
        onClick={onClose}
      ></div>
      <div
        style={{ transform: open ? "translateX(0)" : "translateX(-100vw)" }}
        className={styles.SideDrawer}
      >
        <Link onClick={onClose} href="/">
          HOME
        </Link>
        <Link onClick={onClose} href="/faq">
          FAQ
        </Link>
        <Link onClick={onClose} href="/prices">
          TICKET PRICE & SCHEDULE
        </Link>
        <Link onClick={onClose} href="/policy">
          POLICY
        </Link>
      </div>
    </>
  );
};

export default SideDrawer;
