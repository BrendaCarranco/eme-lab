import React, { useState, useCallback, useContext } from 'react';
import { firebase } from '../../firebase';
import { withRouter } from 'react-router-dom';
import logoeme from '../../img/logoeme.png';
import Modal from 'react-modal';


import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';
import Link from '@material-ui/core/Link';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { UserContext } from '../../context/UserProvider';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    logo: {
        height: '150px',
        width: '320px'

    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const ModalRegister = ({ setLoginForm }) => {
    const classes = useStyles();

    const [email, setEmail] = useState('');
    const [passwordReg, setPasswordReg] = useState('');
    const [name, setName] = useState('');

    const { userRegister } = useContext(UserContext);

    const handleRegister = (e) => {
        e.preventDefault();
        if (!email.trim()) {
            console.log('mete un correo');
            return;
        }
        if (!passwordReg.trim()) {
            console.log('mete contraseña');
            return;
        }
        console.log('validando...');
        userRegister(email, passwordReg, name);
        setEmail('');
        setPasswordReg('');
        setName('');

    };

    return (
        <div>
            <form className={classes.form} noValidate>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12}>
                        <TextField
                            autoComplete="fname"
                            name="firstName"
                            required
                            fullWidth
                            id="firstName"
                            label="Nombre"
                            autoFocus
                            onChange={e => setName(e.target.value)}
                            value={name}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            required
                            fullWidth
                            id="email"
                            label="Correo"
                            name="email"
                            autoComplete="email"
                            onChange={e => setEmail(e.target.value)}
                            value={email}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            fullWidth
                            name="passwordReg"
                            label="Contraseña"
                            type="password"
                            id="passwordReg"
                            autoComplete="current-password"
                            onChange={e => setPasswordReg(e.target.value)}
                            value={passwordReg}
                        />
                    </Grid>

                </Grid>
                <Button
                    type="submit"
                    fullWidth
                    variant="outlined"
                    color="default"
                    className={classes.submit}
                    onClick={handleRegister}
                >
                    Registarme
                            </Button>
                <Grid item xs>
                    <Link variant="body2" color="inherit" onClick={() => setLoginForm(true)} >
                        Ya tengo una cuenta
                    </Link>
                </Grid>


            </form>

        </div>
    );
};

export default withRouter(ModalRegister);
