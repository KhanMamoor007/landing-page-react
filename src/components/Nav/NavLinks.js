import { Link, makeStyles } from '@material-ui/core';
import Logo from '../../assets/img/logo.png';

const useStyles = makeStyles((theme) => {
    return {
        container:{
            width:'427px',
            height:'36px',
            display:'flex',
        },

        link: {
            color:'#B5B5B5',
            marginLeft:'19px',
            fontFamily:'Rubik',
            fontWeight:'600',
            fontSize:'12px',
            letterSpacing:'2px',
            lineHeight:'20px',
            '&:hover': {
                textDecoration: 'none',
                borderBottom: '2px solid', 
            }
        },
        navLinks: {
             width:'347px',
             height:'20px',
             marginLeft:'35px',
             display:'flex',
             marginTop:'10px',
       },
        logo:{
            width:'36px',
            height:'36px',
            display:'flex',
        },
        
    }
})


export default function NavLinks() {
    const classes = useStyles();

    return (
        <div className={classes.container}>
           
            <Link className={classes.link} href="#">
            <img alt='' src={Logo} className={classes.logo}/>
            </Link>
           <div className={classes.navLinks}>
            <Link className={classes.link} href="#">ABOUT</Link>
            <Link  className={classes.link} href="#">GALLERY</Link>
            <Link  className={classes.link} href="#">PRICING</Link>
            <Link  className={classes.link} href="#">FAQ</Link>
            <Link  className={classes.link} href="#">BENEFITS</Link>
           
        </div>
        </div>
    )
}