import { makeStyles } from '@material-ui/core'
import React from 'react'
import { Header } from '../Components/Header';
import {Banner} from '../Components/Banner'

export const Home = () => {
    const classes = useStyles();
    return (
        <div>
            <Header/>
            <Banner/>
        </div>
    )
}

const useStyles = makeStyles(()=>({
    root:{

    }
}))
