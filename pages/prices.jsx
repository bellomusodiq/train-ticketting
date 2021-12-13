import React from "react";
import PageLayout from "../components/layouts/PageLayout";
import styles from "./prices.module.css";
import prices from "../data/prices";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(className, seats, price) {
  return { className, seats, price };
}

const BasicTable = ({ prices }) => {
  const rows = React.useMemo(() => {
    return prices.map((price) =>
      createData(price.class, price.seats, price.price)
    );
  }, [prices]);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>CLASS</TableCell>
            <TableCell align="right">SEATS</TableCell>
            <TableCell align="right">TICKET PRICE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.className}
              </TableCell>
              <TableCell align="right">{row.seats} seaters</TableCell>
              <TableCell align="right"># {row.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const Prices = () => {
  return (
    <PageLayout>
      <div className={styles.Prices}>
        <h1>TICKET PRICE & SCHEDULE</h1>
        {prices.map((price, i) => {
          return (
            <div key={i} className={styles.Table}>
              <p>{price.title}</p>
              <BasicTable prices={price.prices} />
            </div>
          );
        })}
      </div>
    </PageLayout>
  );
};

export default Prices;
