import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import FeaturesList from './FeaturesList';


const useStyles = makeStyles((theme) => ({
   root:{
      maxWidth:'100%',
      maxHeight:'420px',
        },
  
   container:{
      width:'997px',
      height:'382px',
      display: 'flex',
      flexDirection: 'column',
      alignItems:'center',
      //backgroundColor: '#cfe8fc'
    },

  heading:{
      width:'299px', 
      height:'50px',
      fontFamily:'Inter',
      fontSize:'42px',
      fontWeight:700,
      color:'#99EFD0',
      lineHeight:'50px',
      textAlign:'center',
      marginBottom:'13px',
   // marginTop:'12px',
    },

  paragraph:{
      width:'764.37px', 
      height:'22px',
      fontFamily:'Inter',
      fontSize:'16px',
      fontWeight:400,
      color:'#8476AA',
      lineHeight:'22px',
      textAlign:'center',
      marginBottom:'50px',
    },
}));

export default function Features() {
    const classes = useStyles();

return (
      <section className={classes.root}>    
        <Container  className={classes.container}>
          <Typography className={classes.heading}>Your Choice</Typography>
             
             <Typography className={classes.paragraph}
               >There are many reasons to get 
                down and start to get depressed about your situation
              </Typography>
        
         <FeaturesList/>
     </Container>
      </section>
  );
};