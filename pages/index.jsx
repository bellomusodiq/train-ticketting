import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import PageLayout from "../components/layouts/PageLayout";
import styles from "../styles/Home.module.css";
import Image1 from "../assets/images/corona.png";
import Image2 from "../assets/images/trains.png";
import Image3 from "../assets/images/strike.png";
import Dropdown from "../components/Dropdown/Dropdown";

export default function Home() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [classes, setClasses] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const formSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    const closeDropdown = () => {
      if (showDropdown) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("click", closeDropdown);
    return () => {
      document.removeEventListener("click", closeDropdown);
    };
  }, [showDropdown]);

  return (
    <PageLayout>
      <main>
        <div className={styles.Banner}>
          <form onSubmit={formSubmit} className={styles.BookTicket}>
            <div className={styles.From}>
              <select
                onChange={(e) => setFrom(e.target.value)}
                required
                placeholder="From"
                value={from}
                className={styles.Dropdown}
              >
                <option value="">From</option>
                <option>addasdfdsfas</option>
                <option>addasdfdsfas</option>
                <option>addasdfdsfas</option>
              </select>
              <input required className={styles.DatePicker} type="date" />
            </div>
            <div className={styles.From}>
              <select
                onChange={(e) => setFrom(e.target.value)}
                required
                placeholder="From"
                className={styles.Dropdown}
                value={to}
              >
                <option value="">To</option>
                <option>addasdfdsfas</option>
                <option>addasdfdsfas</option>
                <option>addasdfdsfas</option>
              </select>
              <select
                onChange={(e) => setFrom(e.target.value)}
                required
                className={styles.DatePicker}
              >
                <option value="">Classes</option>
                <option value="First Class">First Class</option>
                <option value="Business Class">Business Class</option>
                <option value="Economy Class">Economy Class</option>
                <option value="Standard Class">Standard Class</option>
              </select>
            </div>
            <div className={styles.DropdownContainer}>
              <Dropdown
                show={showDropdown}
                title={
                  <div
                    onClick={() => setShowDropdown(!showDropdown)}
                    className={styles.DropdownTitle}
                  >
                    {adults} Adult (16+)
                    {children > 0 ? `, ${children} Children (0 - 15)` : null}
                  </div>
                }
              >
                <div className={styles.Dropdown}>
                  <p>Adults (16+)</p>
                  <select
                    onChange={(e) => setAdults(e.target.value)}
                    required
                    name=""
                    value={adults}
                    id=""
                  >
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                  </select>
                  <p>Children (0 - 15)</p>
                  <select
                    onChange={(e) => setChildren(e.target.value)}
                    required
                    name=""
                    value={children}
                    id=""
                  >
                    <option value={0}>0</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                  </select>
                </div>
              </Dropdown>
            </div>
            <div className={styles.ButtonContainer}>
              <Button type="submit">FIND MY TRAIN</Button>
            </div>
          </form>
        </div>
        <div className={styles.BigNews}>
          <h1>CORONA VIRUS</h1>
          <h1>MORE THINGS TO KNOW</h1>
          <Button onClick={() => alert("clicked")}>READ MORE</Button>
        </div>
        <div className={styles.News}>
          <div className={styles.NewsItem}>
            <img src={Image1.src} alt="corona" width="100%" />
            <div className={styles.NewsItemContent}>
              <p>
                Nigeria on Tuesday recorded 52 new COVID-19 cases, as total
                infections rose to 213,677.
              </p>
              <Button>READ MORE</Button>
            </div>
          </div>
          <div className={styles.NewsItem}>
            <img src={Image2.src} alt="corona" width="100%" />
            <div className={styles.NewsItemContent}>
              <p>
                The Federal Government is set to name its flagship train station
                located at Ebute Metta after...
              </p>
              <Button>READ MORE</Button>
            </div>
          </div>
          <div className={styles.NewsItem}>
            <img src={Image3.src} alt="corona" width="100%" />
            <div className={styles.NewsItemContent}>
              <p>
                Workers of the Nigeria Railway Corporation, (NRC) have embarked
                on a three-day...
              </p>
              <Button>READ MORE</Button>
            </div>
          </div>
        </div>
      </main>
    </PageLayout>
  );
}
