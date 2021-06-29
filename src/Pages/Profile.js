import { makeStyles, Typography } from '@material-ui/core'
import { Header } from '../Components/Header'
import { Plans } from '../Components/Plans'
import netflixAvatar from '../image/Netflix-avatar.png'
import { NetflixButtton } from '../styles/stylesCoponents'

export const Profile = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Header />
            <Typography variant='h3'>
                Edit Profile
            </Typography>
            <div className={classes.body}>
                <div className={classes.info}>
                    <img src={netflixAvatar} alt='avatar' />
                    <div className={classes.details}>
                        <div className={classes.plans}>
                            <Typography variant='h6'>
                                Email Usuario
                            </Typography>
                            <Typography variant='h5' gutterBottom>
                                Plans
                            </Typography>
                            <Plans cost={7.99}>Netflix Standart</Plans>
                            <Plans cost={11.99}>Netflix Basic</Plans>
                            <Plans cost={15.99}>Netflix Premium</Plans>
                            <NetflixButtton>Sign Out</NetflixButtton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
const useStyles = makeStyles(() => ({
    root: {
        color: '#fff',
        minHeight: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', 
    }

}))

