import Head from "next/head";
import Image from "next/image";
import React from "react";
import Header from "../Header";
import HeaderMobile from "../HeaderMobile";
import styles from "./layout.module.css";
import Facebook from "../../assets/icons/facebook.svg";
import Instagram from "../../assets/icons/instagram.svg";
import Twitter from "../../assets/icons/twitter.svg";
import Link from "next/link";

export default ({ children, pageTitle, pageDescription }) => (
  <div>
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <HeaderMobile />
    <main className={styles.main}>{children}</main>

    <footer className={styles.footer}>
      <div className={styles.Socials}>
        <p>Get connected to us on social networks</p>
        <img src={Facebook.src} alt="facebook icon" />
        <img src={Twitter.src} alt="twitter icon" />
        <img src={Instagram.src} alt="instagram icon" />
      </div>
      <div className={styles.Footer}>
        <div className={styles.Links}>
          <Link href="/about">ABOUT</Link>
          <Link href="/terms">TERMS & CONDITION</Link>
          <Link href="/help">HELP</Link>
          <Link href="/news">NEWS</Link>
        </div>
        <div className={styles.Contacts}>
          <p>D/L: +234 (01) 8887741</p>
          <p>Call center: +234 9088739711</p>
          <p>Mail: customercare@tps.com</p>
        </div>
      </div>
    </footer>
  </div>
);
