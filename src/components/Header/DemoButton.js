import { Button, makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
    btnContainer: {
        width:'350px',
        height:'50px',
        display: 'flex',
        justifyContent: 'space-Between',
        alignItems: 'center',

       
    },
    
    outlineBtn: {
        color: '#F2994A',
        border: '1px solid #F2994A',
        borderRadius:6,
        height: '46px',
        width: '157px',
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
    }
})


export default function DemoButton() {
    const classes = useStyles();

    return (
        <div className={classes.btnContainer}>
            <Button className={classes.outlineBtn}  variant="outlined">Learn More</Button>
            <Button  className={classes.outlineBtn} variant="outlined" >Demo</Button>
        </div>
    )
}