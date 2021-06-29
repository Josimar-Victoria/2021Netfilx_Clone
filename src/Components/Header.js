import { AppBar, Avatar, IconButton, makeStyles,Toolbar } from '@material-ui/core'
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import LogoImg from '../image/netflix-logo-.png'

export const Header = () => {
    const classes = useStyles();
    const histori = useHistory()
    const [show, SetShow] = useState(false)
    
    const hideHeader = () => {
        if(window.scrollY > 100){
            SetShow(true)
        }else{
            SetShow(false)
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", hideHeader);
        return () => window.removeEventListener("scroll",hideHeader)
    }, [])
    return (
        <AppBar position="sticky" elevation={0} className={`${classes.root} ${show && classes.transparent}`}>
            <Toolbar className={classes.toolbar}>
                <IconButton onClick={()=> histori.push("/")}>
                  <img src={LogoImg} alt='logo' className={classes.logo} />
                </IconButton>
                
                <Avatar variant="square" style={{cursor: "pointer"}}
                onClick={()=>histori.push("/profile")}/>
            </Toolbar>
        </AppBar>
    )
}
const useStyles = makeStyles(() => ({
    root: {
        background: '#111',
        height: '60px',
        top: 0,
        left: 0,
        right: 0,
    },
    toolbar:{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    transparent:{
        backgroundColor: "transparent",
    },
    logo: {
        width: "100px",
        cursor: "pointer",

    }
}))
