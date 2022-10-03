import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import GetStartedButton from './GetStartedButton';


import ContextImg from './ContextImg';

const useStyles = makeStyles((theme) => ({
  Context: {
    maxWidth:'100%',
    maxHeight:'629px',
},
 container:{
    display:'grid',
    justifyContent:'center',
    marginTop:'200px',
  },
heading:{
    width:'770px', 
    height:'100px',
    fontFamily:'Inter',
    fontSize:'41px',
    fontWeight:700,
    color:'#99EFD0',
    lineHeight:'50px',
    textAlign:'center',
    marginBottom:'46px',
  },
}));

export default function Context() {
  const classes = useStyles();

  return (
    <section className={classes.Context}>
        <Grid className={classes.container}>
        <Grid item xs={12} style={{width:'944px', height:'200px', textAlign: '-webkit-center'}}>
          <Typography className={classes.heading}
          >Create your <span style={{color:'#F2994A'}}>next project</span> with startup framework</Typography>
         <GetStartedButton/>
       
        </Grid>
        
        </Grid>
        <ContextImg/>
    </section>
  );
}