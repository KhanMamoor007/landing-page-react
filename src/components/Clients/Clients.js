import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';


 import Img1 from '../../assets/svg/clients(4).svg';
 import Img2 from '../../assets/svg/clients(3).svg';
 import Img3 from '../../assets/svg/clients(2).svg';
 import Img4 from '../../assets/svg/clients(1).svg';
 import Img5 from '../../assets/svg/clients(6).svg';
 import Img6 from '../../assets/svg/clients(5).svg';

const useStyles = makeStyles((theme) => ({
  clients: {
    width:'1170px',
    height:'30px',
    marginTop:'103px',
    display:'flex',
    justifyContent:'space-evenly',
    marginBottom:'98px'
  },
  
}));

export default function Clients() {
  const classes = useStyles();

  return (
    <Container className={classes.clients}>
      
        <Grid   style={{width:'117.19px', height:'25px'}}>
                    <img src={Img1} alt='' style={{color:'#8476AA',}}/>
        </Grid>
        
        <Grid   style={{width:'117.19', height:'25px'}}>
          <img src={Img2} alt='' />
        </Grid>
        
        <Grid   style={{width:'92.19', height:'25px'}}>
           <img src={Img3} alt='' />
        </Grid>
        
        <Grid   style={{width:'104.69', height:'25px'}}>
           <img src={Img4} alt='' />
        </Grid>
        
        <Grid  style={{width:'55.47px', height:'25px'}}>
           <img src={Img5} alt='' />
        </Grid>

        <Grid   style={{width:'117.19px', height:'25px'}}>
           <img src={Img6} alt='' />
        </Grid>
      
    </Container>
  );
}