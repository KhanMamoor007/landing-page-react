import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";

// import Logo from '../../assets/img/logo.png';
import NavLinks from "./NavLinks";
import AuthButtons from "./AuthButton";

const useStyles = makeStyles((theme) => ({
  nav: {
    display: "flex",
    justifyContent: "center",
    // backgroundColor:'#3B1D60',
  },
  container: {
    width: "1100px",
    height: "36px",
    marginTop: "79px",
    display: "flex",
    justifyContent: "space-between",
  },

  logo: {
    width: "36px",
    height: "36px",
    display: "flex",
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <nav className={classes.nav}>
      <div className={classes.container}>
        <Grid item xs={6}>
          {/* <img alt='' src={Logo} className={classes.logo}/> */}
          <NavLinks />
        </Grid>
        <Grid item xs={3}>
          <AuthButtons />
        </Grid>
      </div>
    </nav>
  );
}
