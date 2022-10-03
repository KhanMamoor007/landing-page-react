import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import IMG from '../../assets/img/contextImg.png';


const useStyles = makeStyles((theme) => ({
  ContextImg: {
    maxWidth:'100%',
    maxHeight:'629px',
    display:'grid',
    justifyContent:'center',
    marginTop:'-130px',
    // marginLeft:'35px',
  
  },
}));

export default function ContextImg() {
  const classes = useStyles();

  return (
    <div className={classes.ContextImg}>
      <Grid item xs={12} style={{width:'1203px', height:'492px', display:'flex'}}>
        <img alt='' src={IMG}  style={{}} />
         
        </Grid>
    </div>
  );
}