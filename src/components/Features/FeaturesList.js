import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Horizontal from '../../assets/features.svg/flip-horizontal.svg';
import Airpods from '../../assets/features.svg/airpods.svg';
import Lte from '../../assets/features.svg/lte.svg';
import Thunder from '../../assets/features.svg/thunder-move.svg';
import Attachment from '../../assets/features.svg/attachment.svg';
import Bulb from '../../assets/features.svg/bulb.svg';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width:'997px',
    height:'310px'
  },

  img:{
      width:'24px',
      height:'24px',
      display: 'flex',
      alignItems: 'baseline',
      cursor:'pointer',
  },

  features:{
      display:'flex',
     flexDirection:'column',
  },

  heading:{
     width:'218px',
     height:'22px',
     fontFamily:'Inter',
     fontSize:'17px',
     fontWeight:700,
     color:'#99EFD0',
     lineHeight:'22px',
     marginBottom:'12px',
  },

  paragraph:{
    width:'247px', 
    height:'66px',
    fontFamily:'Inter',
    fontSize:'13px',
    fontWeight:600,
    color:'#8476AA',
    lineHeight:'22px',
    marginBottom:'25px',
   },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function FeaturesList() {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <Grid container spacing={3}>
    {/* 1       */}
        <Grid item xs={4} style={{display:'flex', justifyContent:'space-around'}}>
           <img alt='' src={Horizontal} className={classes.img}/>
              
          <Grid className={classes.features}>
             <Typography className={classes.heading}>Ecstatic elegance</Typography>
             <Typography className={classes.paragraph}>
                Article nor prepare chicken you him now. shy merits say advice ten 
                before lovers inmate add 
             </Typography>
          </Grid>
        </Grid>
    {/* 2       */}
        <Grid item xs={4} style={{display:'flex', justifyContent:'space-around'}}>
           <img alt='' src={Airpods} className={classes.img}/>
      
           <Grid className={classes.features}>
             <Typography className={classes.heading}>Folly words window</Typography>
             <Typography className={classes.paragraph}>
                Effect if in up no depend seemed. Ecstatic elegance gay but disposed. We may
                rent been part what
             </Typography>
          </Grid>    
        </Grid>
    {/* 3       */}
        <Grid item xs={4} style={{display:'flex', justifyContent:'space-around'}}>
           <img alt='' src={Lte} className={classes.img}/>
      
           <Grid className={classes.features}>
             <Typography className={classes.heading} style={{fontSize:'16px'}}>Possible procured trifiling</Typography>
             <Typography className={classes.paragraph} style={{fontSize:'14px'}}>
                We may rent part what. An concluded sportsman offending so provision 
                mr education
             </Typography>
           </Grid>    
        </Grid>
     {/* 4       */}   
        <Grid item xs={4} style={{display:'flex', justifyContent:'space-around'}}>
           <img alt='' src={Thunder} className={classes.img}/>
      
           <Grid className={classes.features}>
              <Typography className={classes.heading}>Open game</Typography>
              <Typography className={classes.paragraph} style={{fontSize:'13px'}}>
                Shy merits say advice ten before lovers innate add. 
                She cordially behaviour can attempted estimable.
              </Typography>
            </Grid>    
        </Grid>
    {/* 5       */}
        <Grid item xs={4} style={{display:'flex', justifyContent:'space-around'}}>
           <img alt='' src={Attachment} className={classes.img}/>
      
           <Grid className={classes.features}>
              <Typography className={classes.heading}>Endeavor</Typography>
              <Typography className={classes.paragraph}>
                Improve ashamed married expense bed her comfort pursuit mrs. 
                Four time took ye your as fail lady. 
              </Typography>
           </Grid>    
       </Grid>
    {/* 6       */}
       <Grid item xs={4} style={{display:'flex', justifyContent:'space-around'}}>
          <img alt='' src={Bulb} className={classes.img}/>
      
          <Grid className={classes.features}>
             <Typography className={classes.heading}>Comfort pursuit</Typography>
             <Typography className={classes.paragraph}>
               Had denoting properly jointure you occasion directly raillery. 
               In said to of poor full be post face snug. 
             </Typography>
           </Grid>    
        </Grid>
    
    </Grid>
  </section>
  );
}