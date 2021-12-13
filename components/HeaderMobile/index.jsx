import React, { useState } from "react";
import styles from "./HeaderMobile.module.css";
import Logo from "../../assets/images/logo.png";
import SideDrawer from "./SideDrawer";

const HeaderMobile = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = () => {
    setOpenDrawer((val) => !val);
  };

  return (
    <>
      <header className={styles.Header}>
        <div className={styles.LogoContainer}>
          <img src={Logo.src} alt="logo" />
        </div>
        <button onClick={toggleDrawer} className={styles.Menu}>
          <div></div>
          <div></div>
          <div></div>
        </button>
      </header>
      <SideDrawer onClose={toggleDrawer} open={openDrawer} />
    </>
  );
};

export default HeaderMobile;
