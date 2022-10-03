import { Button, makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
    btnContainer: {
        width:'760px',
        height:'50px',
         display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
     },
    
    outlineBtn: {
        color: '#F2994A',
        border: '1px solid #F2994A',
        borderRadius:6,
        height: '54px',
        width: '164px',
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


export default function GetStartedButton() {
    const classes = useStyles();
return (
        <div className={classes.btnContainer}>
            <Button className={classes.outlineBtn}  variant="outlined">GET STARTED</Button>
            
        </div>
    )
}