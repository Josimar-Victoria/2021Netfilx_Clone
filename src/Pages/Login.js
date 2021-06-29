import { makeStyles, Typography } from '@material-ui/core'
import LogoImg from '../image/netflix-logo-.png'
import HeroBanner from '../image/HeroBanner.jpg'
import { NetflixButtton,NetflixInput } from '../styles/stylesCoponents'
import zIndex from '@material-ui/core/styles/zIndex'

export const Login = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <img src={LogoImg} alt='logo' className={classes.logo} />
            <NetflixButtton className={classes.button_section}>Iniciar Secion</NetflixButtton>
            <div className={classes.info}>
                <Typography variant='h4' gutterBottom>
                    Unlimited films, Tv Programmes and more.
                </Typography>
                <Typography variant='h5'>
                    Watch  anywhere. Cancel at any time
                </Typography>
                <Typography variant='h6' gutterBottom>
                    Redy to watch ? Enter your email to create or restart
                    your membership
                </Typography>
                <div className={classes.inputBlock}>
                   <NetflixInput placeholder='Email Address'/>
                   <NetflixButtton>GET STARTED</NetflixButtton>
                </div>
            </div>
        </div>
    )
}

const useStyles = makeStyles(() => ({
    root: {
        position: 'relative',
        height: '100vh',
        backgroundImage: `url(${HeroBanner})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        objectFit: 'contain',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: "150px",
        cursor: "pointer",
        position: 'fixed',
        top: '25px',
        left: 20,
    },
    button_section: {
        position: 'fixed',
        zIndex: 15,
        right: 20,
        top: 20,
    },
    info: {
      color: '#fff',
      zIndex: 15,
      textAlign: 'center',
      "& h4": {
        fontWeight: 800,
      },
      "& h5": {
        fontWeight: 400,
      },
    },
}))