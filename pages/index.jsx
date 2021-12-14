import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import PageLayout from "../components/layouts/PageLayout";
import styles from "../styles/Home.module.css";
import Image1 from "../assets/images/corona.png";
import Image2 from "../assets/images/trains.png";
import Image3 from "../assets/images/strike.png";
import Dropdown from "../components/Dropdown/Dropdown";
import Modal from "../components/Modal";
import OriginDestination from "../components/OriginDestination";
import {
  CircularProgress,
  Grid,
  Input,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useToasts } from "react-toast-notifications";

export default function Home() {
  const { addToast } = useToasts();
  const [showDropdown, setShowDropdown] = useState(false);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [classes, setClasses] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [coach, setCoach] = useState("");
  const [seat, setSeat] = useState();
  const [openModal, setOpenModal] = useState(false);
  const [openPaymentModal, setOpenPaymentModal] = useState(false);
  const [openRecieptModal, setOpenRecieptModal] = useState(false);
  const [requiredError, setRequiredError] = useState(false);
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardMonth, setCardMonth] = useState("");
  const [cardYear, setCardYear] = useState("");
  const [securityCode, setSecurityCode] = useState("");
  const [originDestinationValue, setOriginDestinationValue] = useState();
  const [loading, setLoading] = useState(false);

  const [originDestination, setOriginDestination] = useState([
    {
      origin: {
        location: "ABEOKUTA (ABEOKUTA)",
        time: "08:00AM",
      },
      destination: { location: "ALAGBOMEJI (LAGOS)", time: "08:00AM" },
    },
    {
      origin: { location: "ABEOKUTA (ABEOKUTA)", time: "02:00PM" },
      destination: { location: "ALAGBOMEJI (LAGOS)", time: "03:00PM" },
    },
  ]);

  const formSubmit = (e) => {
    e.preventDefault();
    setOpenModal(true);
  };

  const toggleShowDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const submitToPay = (e) => {
    e.preventDefault();

    setRequiredError(false);
    if (!originDestinationValue) {
      setRequiredError(true);
      return;
    }
    setOpenModal(false);
    setOpenPaymentModal(true);
  };

  const makePayment = (e) => {
    e.preventDefault();
    const data = {
      adults,
      children,
      classes,
      from,
      to,
      coach,
      seat,
      cardName,
      cardNumber,
      cardMonth,
      cardYear,
      securityCode,
    };

    setLoading(true);

    fetch("/api/payments", {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((value) => {
        setOpenRecieptModal(true);
        setOpenPaymentModal(false);
        setLoading(false);
        addToast("Payment was successful", {
          appearance: "success",
          autoDismiss: true,
        });
      })
      .catch(() => {
        addToast("Payment failed", {
          appearance: "error",
          autoDismiss: true,
        });
        setLoading(false);
      });
  };

  return (
    <PageLayout>
      <Modal open={openRecieptModal} onClose={() => setOpenRecieptModal(false)}>
        <div className={styles.ModalContainer}>
          <h2>Thank you!</h2>
          <p>Here is your reciept, enjoy your commute</p>
          <div className={styles.TimeSelect}>
            <div className={styles.TimeSelectLeft}>
              {requiredError && (
                <p style={{ color: "tomato" }}>Please select your train time</p>
              )}
              <OriginDestination
                origin={originDestinationValue?.origin || {}}
                destination={originDestinationValue?.destination || {}}
              />
            </div>
            <div className={styles.TimeSelectRight}>
              <h3>COACH</h3>
              <p style={{ margin: 0 }}>{coach}</p>
              <br />
              <h3>SEAT</h3>
              <p style={{ margin: 0 }}>{seat}</p>
            </div>
          </div>
        </div>
      </Modal>
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <div className={styles.ModalContainer}>
          <form onSubmit={submitToPay}>
            <OriginDestination
              origin={{ location: "ALAGBOMEJI (LAGOS)" }}
              destination={{ location: "ABEOKUTA (ABEOKUTA)" }}
            />
            <h2>Select Time, Coach and Seat bellow</h2>
            <div className={styles.TimeSelect}>
              <div className={styles.TimeSelectLeft}>
                {requiredError && (
                  <p style={{ color: "tomato" }}>
                    Please select your train time
                  </p>
                )}
                {originDestination.map((item, i) => (
                  <OriginDestination
                    key={i}
                    origin={item.origin}
                    destination={item.destination}
                    onClick={() => {
                      setRequiredError(false);
                      setOriginDestinationValue(item);
                    }}
                    selected={
                      originDestination.indexOf(originDestinationValue) === i
                    }
                  />
                ))}
              </div>
              <div className={styles.TimeSelectRight}>
                <select
                  required
                  value={coach}
                  onChange={(e) => setCoach(e.target.value)}
                >
                  <option value="">Select Coach</option>
                  <option value="SP00008">SP00008</option>
                </select>
                <select
                  required
                  value={seat}
                  onChange={(e) => setSeat(e.target.value)}
                >
                  <option value="">Select Seat</option>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                </select>
              </div>
            </div>
            <div className={styles.IterButton}>
              <Button>MAKE PAYMENT</Button>
            </div>
          </form>
        </div>
      </Modal>
      <Modal open={openPaymentModal} onClose={() => setOpenPaymentModal(false)}>
        <div className={styles.ModalContainer}>
          <form onSubmit={makePayment} className={styles.PaymentForm}>
            <h1>Checkout</h1>
            <p>Enter card information to make payment</p>
            <TextField
              required
              fullWidth
              style={{ margin: "10px 0" }}
              onChange={(e) => setCardName(e.target.value)}
              value={cardName}
              label="Name on Card"
              type="text"
            />
            <TextField
              required
              fullWidth
              style={{ margin: "10px 0" }}
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              label="Card Number"
            />
            <Grid container justifyContent="space-between" spacing={5}>
              <Grid item md={4}>
                <Select
                  required
                  fullWidth
                  style={{ margin: "10px 0" }}
                  value={cardMonth}
                  onChange={(e) => setCardMonth(e.target.value)}
                  label="Month"
                >
                  <InputLabel>Month</InputLabel>
                  <MenuItem value={"Jan"}>Jan</MenuItem>
                  <MenuItem value={"Feb"}>Feb</MenuItem>
                  <MenuItem value={"Mar"}>Mar</MenuItem>
                  <MenuItem value={"Apr"}>Apr</MenuItem>
                  <MenuItem value={"May"}>May</MenuItem>
                  <MenuItem value={"Jun"}>Jun</MenuItem>
                  <MenuItem value={"Jul"}>2027</MenuItem>
                  <MenuItem value={"Aug"}>Aug</MenuItem>
                  <MenuItem value={"Sep"}>Sep</MenuItem>
                  <MenuItem value={"Oct"}>Oct</MenuItem>
                  <MenuItem value={"Nov"}>Nov</MenuItem>
                  <MenuItem value={"Dec"}>Dec</MenuItem>
                </Select>
              </Grid>
              <Grid item md={4}>
                <Select
                  required
                  fullWidth
                  style={{ margin: "10px 0" }}
                  value={cardYear}
                  onChange={(e) => setCardYear(e.target.value)}
                  label="Year"
                >
                  <InputLabel>Year</InputLabel>
                  <MenuItem value={"2021"}>2021</MenuItem>
                  <MenuItem value={"2022"}>2022</MenuItem>
                  <MenuItem value={"2023"}>2023</MenuItem>
                  <MenuItem value={"2024"}>2024</MenuItem>
                  <MenuItem value={"2025"}>2025</MenuItem>
                  <MenuItem value={"2026"}>2026</MenuItem>
                  <MenuItem value={"2027"}>2027</MenuItem>
                  <MenuItem value={"2028"}>2028</MenuItem>
                  <MenuItem value={"2029"}>2029</MenuItem>
                  <MenuItem value={"2030"}>2030</MenuItem>
                </Select>
              </Grid>
              <Grid item md={4}>
                <TextField
                  required
                  fullWidth
                  style={{ margin: "10px 0" }}
                  value={securityCode}
                  onChange={(e) => setSecurityCode(e.target.value)}
                  label="Security Code"
                />
              </Grid>
            </Grid>
            <div className={styles.ButtonContainer}>
              {loading ? (
                <CircularProgress />
              ) : (
                <Button type="submit">MAKE PAYMENT</Button>
              )}
            </div>
          </form>
        </div>
      </Modal>
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
                onChange={(e) => setTo(e.target.value)}
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
                onChange={(e) => setClasses(e.target.value)}
                required
                className={styles.DatePicker}
                value={classes}
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
                    onClick={toggleShowDropdown}
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
