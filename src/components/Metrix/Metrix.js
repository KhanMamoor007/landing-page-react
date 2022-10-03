import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import MetrixBottom from './MetrixBottom';



const useStyles = makeStyles((theme) => ({
   Metrix:{
      maxWidth:'100%',
      maxHeight:'420px',
        },
  
   container:{
      width:'1091px',
      height:'322px',
      display: 'flex',
      flexDirection: 'column',
      alignItems:'center',
      //backgroundColor: '#cfe8fc'
    },

  heading:{
      maxWidth:'864px', 
      height:'84px',
      fontFamily:'Inter',        
      fontSize:'42px',
      fontWeight:700,
      color:'#99EFD0',
      lineHeight:'42px',
      textAlign:'center',
      marginBottom:'32px',
      //letterSpacing:'3px'
   // marginTop:'12px',
    },
   

  paragraph:{
      width:'414px', 
      height:'40px',
      fontFamily:'Inter',
      fontSize:'15px',
      fontWeight:400,
      color:'#8476AA',
      lineHeight:'20px',
      textAlign:'center',
      marginBottom:'48px',
    },
}));

export default function Metrix() {
    const classes = useStyles();

return (
      <section className={classes.Metrix}>    
        <Container  className={classes.container}>
          <Typography className={classes.heading}>
             3 Simple Ways To <span style={{color:'#F2994A'}}>Save</span> A Bunch 
             Of <span style={{color:'#F2994A'}}>Money</span> When Buying A New Computer
          </Typography>
             
             <Typography className={classes.paragraph}
               >Fully customizable and neatly organized components 
               will help you work faster without limiting creative freedom.
              </Typography>
        
         <MetrixBottom/>
     </Container>
      </section>
  );
};