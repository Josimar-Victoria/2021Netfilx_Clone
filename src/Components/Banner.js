import { Button, makeStyles, Typography } from '@material-ui/core'
import Bannerimg from '../image/netfil.jpeg'
import React from 'react'

export const Banner = () => {
    const classes = useStyles();

    const truncate = (string, n) =>string?.length > n
            ? `${string.substr(0, n - 1)}...`
            : string

    return (
        <div className={classes.root}>
            <div className={classes.content}>
                <Typography variant="h2" component="h1">
                    Movie Title
                </Typography>
                <div className={classes.buttons}>
                    <Button>Play</Button>
                    <Button>My lIST</Button>
                </div>
                <Typography style={{wordWrap: 'break-word'}} variant="h6" className={classes.description}>
                    {
                        truncate('Movie description la casa de papel unas de las mejores sereies una serieri original de netflix nugusdj0hyf6ywgbnd0wihdnkpk hugduhgwidf ygf7ygwojfc90hf i7tgwdubfijh igh8hwifo00 hioond iyhuwgc khhwdi,cpfñi ugwbdp gaugduwdfwifihghwp uhgwt hd oneyfgqs  uidpmw yfwḱr i hyfjwnfow ihihnpjonftfgndodmhtk ujhubekfpqdnb',60)
                    }
                </Typography>
               <div className={classes.fadeBottom}/>
            </div>
        </div>
    )
}
const useStyles = makeStyles(() => ({
    root: {
        backgroundImage: `url(${Bannerimg})`,
        position: "relativa",
        objectFit: 'contain',
        height: "490px",
        width: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: '#fff',
    },
    buttons: {
        "& button": {
            color: '#fff',
            fontWeight: 700,
            borderRadius: "5px",
            marginRight: '1rem',
            backgroundColor: "rgba(51,51,51,0.5)",
        },
        '& button:hover': {

            color: "#000",
            backgroundColor: '#e6e6e6'
        },
    },
    fadeBottom: {
        position: 'absolute',
        top: "30vh",
        bottom: 0,
        right: 0,
        left: 0,
        zIndex: 99,
        backgroundImage: 'linear-gradient(180deg, transparent, rgba(37,37,37,0.61),#111)',
    }

}))

