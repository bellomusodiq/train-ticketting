import React from "react";
import styles from "./OriginDestination.module.css";

const OriginDestination = ({ origin, destination, selected, onClick }) => {
  return (
    <div
      className={
        !origin.time ? styles.OriginDestination : styles.OriginDestinationActive
      }
      onClick={origin.time ? onClick : () => {}}
      style={selected ? { boxShadow: "5px 5px 8px lightgray" } : {}}
    >
      <div className={styles.Origin}>
        {!origin.time ? (
          <div className={styles.FromToHeader}>
            <h3>FROM</h3>
          </div>
        ) : (
          <p>Source</p>
        )}
        <p>{origin.location}</p>
        {origin.time && <p>{origin.time}</p>}
      </div>
      <div className={styles.Divider}>
        {origin.time ? "............................" : ""}
      </div>
      <div className={styles.Destination}>
        {!destination.time ? (
          <div className={styles.FromToHeader}>
            <h3>TO</h3>
          </div>
        ) : (
          <p>Destination</p>
        )}
        <p>{destination.location}</p>
        {destination.time && <p>{destination.time}</p>}
      </div>
    </div>
  );
};

export default OriginDestination;
