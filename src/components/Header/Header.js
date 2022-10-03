import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography, Link } from "@material-ui/core";

import IMG from "../../assets/img/headerImg.png";
import Video from "../../assets/img/headervideo.png";
import DemoButton from "./DemoButton";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "510px",
    display: "flex",
    justifyContent: "center",
    marginTop: "135px",
  },

  container: {
    width: "1063px",
    height: "510px",
    display: "flex",
    justifyContent: "space-between",
  },

  heading: {
    width: "531px",
    height: "150px",
    fontFamily: "Inter",
    fontSize: "44px",
    fontWeight: 700,
    color: "#99EFD0",
    lineHeight: "50px",
    marginBottom: "19px",
    //marginTop:'12px',
  },

  paragraph: {
    width: "468px",
    height: "44px",
    fontFamily: "Inter",
    fontSize: "17px",
    fontWeight: 600,
    color: "#8476AA",
    lineHeight: "22px",
    marginBottom: "40px",
  },
  video: {
    width: "140px",
    height: "80px",
    cursor: "pointer",
  },

  description: {
    width: "380px",
    height: "44px",
    fontFamily: "Rubik",
    fontSize: "16px",
    fontWeight: 400,
    color: "#8476AA",
    lineHeight: "22px",
    marginBottom: "8px",
  },

  link: {
    width: "95px",
    height: "22px",
    fontFamily: "Rubik",
    fontSize: "14px",
    fontWeight: 400,
    color: "#6D6D78",
    lineHeight: "22px",
    cursor: "pointer",
    //marginBottom:'60px',
  },
}));

export default function Header() {
  const classes = useStyles();
  return (
    <header className={classes.root}>
      <Grid className={classes.container}>
        <Grid
          item
          xs={6}
          style={{ width: "540px", height: "439px", marginTop: "16px" }}
        >
          <Typography className={classes.heading}>
            Many reasons to get up and start to get back in the business
          </Typography>

          <Typography className={classes.paragraph}>
            The harder you work for something, the greater you'll feal when you
            achieve it.
          </Typography>

          <Grid item xs={12} style={{ marginBottom: "60px" }}>
            <DemoButton />
          </Grid>

          <Grid item xs={12} style={{ width: "540px", height: "80px" }}>
            <Grid style={{ display: "flex" }}>
              <img alt="" src={Video} className={classes.video} />

              <Grid style={{ marginLeft: "29px" }}>
                <Typography className={classes.description}>
                  The harder you work for something, the greater you'll feal
                  when you achieve it.
                </Typography>

                <Link className={classes.link}>Watch preview</Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={6} style={{ width: "723.71px", height: "579.57px" }}>
          <img
            alt=""
            src={IMG}
            style={{ width: "637.49px", height: "579.57px" }}
          />
        </Grid>
      </Grid>
    </header>
  );
}
