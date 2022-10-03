import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

import Classes from './FooterLink.module.css';

const useStyles = makeStyles((theme) => ({
//   root: {
//     maxWidth:'100%',
//     maxHeight:'22px',
//     backgroundImage: 'url(../../assets/img/footer.png)',
//     backgroundSize: 'cover', 
//   },
  container:{
    width:'765px',
    height:'20px',
    display:'flex',
    justifyContent:'space-evenly',
    marginLeft:'122px',
  },
  heading:{
    width:'127px',
    height:'20px',
    fontFamily:'Inter',
    fontWeight:400,
    fontSize: '13px',
    lineHeight: '20px',
    marginBottom:'20px',
    color:'#8D8D8D',
  },
}));

export default function FooterLink() {
  const classes = useStyles();

  return (
    <div className={Classes.footerlink}>
      <Grid className={classes.container}>
          
          <Typography className={classes.heading}>© Copyrights 2021</Typography>
          <Typography className={classes.heading}>Privacy policy</Typography>
          <Typography className={classes.heading}>Terms of service</Typography>
      </Grid>
    </div>
  );
};