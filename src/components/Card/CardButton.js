import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import InputBase from '@material-ui/core/InputBase';

import IconButton from '@material-ui/core/IconButton';


import { Button } from "@material-ui/core"
// import MenuIcon from '@material-ui/core/MenuIcon';
// import SearchIcon from '@material-ui/icons/Search';
// import DirectionsIcon from '@material-ui/icons/Directions';

const useStyles = makeStyles((theme) => ({
  root: {
    
    display: 'flex',
    alignItems: 'center',
    width: 416,
    height: 72,
    marginLeft: '100px',
  },
  input: {
    width:288,
    height:56,
    backgroundColor:'#979797',
    marginLeft:'10px',
    padding:'20px'
  },

  btnContainer: {
    width:'128px',
    height:'56px',
    // display: 'flex',
    // justifyContent: 'space-Between',
    alignItems: 'center',
    marginLeft:'-12px',

   
},

outlineBtn: {
    color: '#F2994A',
    border: '1px solid #F2994A',
    borderRadius:1,
    height: '56px',
    width: '128px',
    fontFamily:'Rubik',
    fontWeight:'500',
    fontSize:'12px',
    lineHeight:'20px',
    letterSpacing:'2px',
    transition: 'all .3s',
    backfaceVisibility: 'hidden',
    boxSizing: 'border-box',
    '&:hover': {
        color: '#fff',
        backgroundColor: '#F2994A',
        backfaceVisibility: 'hidden',
    }
}}));

export default function CardButton() {
  const classes = useStyles();

  return (
      <section className={classes.root}>
      
      <InputBase
        className={classes.input}
        placeholder="Your Email"
         
      />
      <IconButton type="submit" className={classes.btnContainer} >
      
            <Button className={classes.outlineBtn}  >Search</Button>
            
        
      </IconButton>
      
      </section>
    
  );
}












