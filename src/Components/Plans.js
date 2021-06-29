import { makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { NetflixButtton } from '../styles/stylesCoponents';

export const Plans = ({cost, children}) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
          <Typography variant='h5'>
              {children}
          </Typography>
          <NetflixButtton>Subscribe</NetflixButtton>
        </div>
    )
}
const useStyles = makeStyles(()=>({
    root:{

    }
}))
