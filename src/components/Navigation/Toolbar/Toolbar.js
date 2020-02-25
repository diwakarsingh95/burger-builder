import React from "react";

import styles from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import NavigatioonItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const Toolbar = props => {
  return (
    <header className={styles.Toolbar}>
      <DrawerToggle clicked={props.drawerToggleClicked} />
      <div className={styles.Logo}>
        <Logo />
      </div>
      <nav className={styles.DesktopOnly}>
        <NavigatioonItems />
      </nav>
    </header>
  );
};

export default Toolbar;
