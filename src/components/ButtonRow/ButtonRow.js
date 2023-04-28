import React from "react";

import styles from "./ButtonRow.module.css";

const ButtonRow = ({ children }) => {
  return (
    <div className={styles.overflowWrapper}>
      <div className={styles.buttonRow}>{children}</div>
    </div>
  );
};

export default ButtonRow;
