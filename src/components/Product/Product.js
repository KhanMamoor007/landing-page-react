import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";

import People from "../../assets/img/productImg.png";
import Swiss from "../../assets/img/swiss-knife.png";
import LTE from "../../assets/features.svg/lte.svg";

import Classes from "./Product.module.css";
import DOT from "../../assets/img/productdot.png";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "1359px",
    height: "446px",
    display: "flex",
    justifyContent: "space-around",
    margin: "auto",
    marginTop: "80px",
  },
  heading: {
    width: "480px",
    height: "32px",
    fontFamily: "Inter",
    fontWeight: 700,
    fontSize: "28px",
    lineHeight: "32px",
    marginBottom: "30px",
    color: "#99EFD0",
  },
  text: {
    width: "414px",
    height: "40px",
    fontFamily: "Inter",
    color: "#8476AA",
    fontSize: "15px",
    fontWeight: 400,
    lineHeight: "20px",
    textTransform: "none",
    marginBottom: "75px",
  },
  featureHeading: {
    width: "92px",
    height: "18px",
    fontFamily: "Inter",
    fontWeight: 700,
    fontSize: "15px",
    lineHeight: "Auto",
    marginBottom: "30px",
    color: "#99EFD0",
  },
  featureText: {
    width: "224px",
    height: "60px",
    fontFamily: "Inter",
    color: "#8476AA",
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "20px",
    textTransform: "none",
    marginBottom: "75px",
  },
}));

export default function Product() {
  const classes = useStyles();

  return (
    <section className={Classes.product}>
      <Grid className={classes.container}>
        <Grid style={{ width: "495px", height: "446px" }}>
          <img
            alt=""
            src={People}
            style={{ width: "495px", height: "446px" }}
          />
        </Grid>

        <Grid style={{ width: "512px", height: "290px", marginTop: "100px" }}>
          <Typography className={classes.heading}>
            Help Finding Information Online
          </Typography>
          <Typography className={classes.text}>
            Fully customizable and neatly organized components will help you
            work faster without limiting creative freedom.
          </Typography>

          <Grid style={{ display: "flex", justifyContent: "space-between" }}>
            <Grid style={{ width: "224px", height: "136px" }}>
              <img
                alt=""
                src={Swiss}
                style={{ width: "36px", height: "36px" }}
              />
              <Typography className={classes.featureHeading}>
                Feature One
              </Typography>
              <Typography className={classes.featureText}>
                Fully customizable and neatly organized components will help you
                work faster
              </Typography>
            </Grid>

            <Grid style={{ width: "224px", height: "136px" }}>
              <img alt="" src={LTE} style={{ width: "36px", height: "36px" }} />
              <Typography className={classes.featureHeading}>
                Feature Two
              </Typography>
              <Typography className={classes.featureText}>
                Fully customizable and neatly organized components will help you
                work faster{" "}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        {/* <Grid><img alt='' src={DOT}/></Grid> */}
      </Grid>
    </section>
  );
}
