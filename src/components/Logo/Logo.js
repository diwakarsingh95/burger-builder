import React from "react";

import logo from "../../assets/images/burger-logo.png";
import styles from "./Logo.module.css";

const Logo = props => {
  return (
    <div className={styles.Logo}>
      <img src={logo} alt="Burger-Builder" />
    </div>
  );
};

export default Logo;
