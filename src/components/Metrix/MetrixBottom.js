import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  MetrixBottom: {
    maxWidth:'1440px',
    maxHeight:'300px',
    display:'flex',
    justifyContent:'center'    
  },

  container:{
      width:'1091px',
      height:'118px',
      display:'flex'
  },

  digit:{
     width:'92px',
     height:'42px',
     fontFamily:'Inter',
     fontSize:'36px',
     fontWeight:700,
     color:'#99EFD0',
     lineHeight:'42px',
     textAlign:'center',
     marginBottom:'22px'
  },
  paragraph:{
    width:'291px', 
    height:'60px',
    fontFamily:'Inter',
    fontSize:'15px',
    fontWeight:600,
    color:'#8476AA',
    lineHeight:'25px',
    textAlign:'center',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function MetrixBottom() {
  const classes = useStyles();

  return (
    <section className={classes.MetrixBottom}>
      <Grid  className={classes.container}>
        <Grid item xs={4} style={{width:'291px', height:'118px'}}>
          
              <Typography className={classes.digit} style={{marginLeft:'102px'}}>
                  100+
              </Typography>
              <Typography className={classes.paragraph} style={{fontSize:'19px'}}>
                  5 Reasons To Purchase Desktop Computers
              </Typography>
          
        </Grid>
        
        <Grid item xs={4} style={{width:'291px', height:'118px'}}>
              <Typography className={classes.digit} style={{marginLeft:'75px'}}>
                  43,000+
              </Typography>
              <Typography className={classes.paragraph}>
                  3 Simple Ways To Save A Bunch Of Money When Buying A New Computer
              </Typography>
        </Grid>
        
        <Grid item xs={4} style={{width:'291px', height:'118px'}}>
               <Typography className={classes.digit} style={{marginLeft:'86px'}}>
                  30+
               </Typography>
               <Typography className={classes.paragraph} style={{fontSize:'16px'}}>
                  A Discount Toner Cartridge Is Better Than Ever And You Will Save 50 Or More
               </Typography>
        </Grid>
       
      </Grid>
    </section>
  );
}