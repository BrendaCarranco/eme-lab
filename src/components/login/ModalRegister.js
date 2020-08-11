import React, { useState, useCallback, Fragment } from 'react';
import { firebase } from '../../firebase';
import { withRouter } from 'react-router-dom';
import logoeme from '../../img/logoeme.png';
import Modal from 'react-modal';

import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

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

const ModalRegister = ({ setRegister, history }) => {
    const classes = useStyles();

    const [modalIsOpen, setModalIsOpen] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState('');
    const [name, setName] = useState('');

    const closeModalRegister = () => {
        setModalIsOpen(false);
        setRegister(false);
        history.push('/signin');
    };

    const handleRegister = (e) => {
        e.preventDefault();
        if (!email.trim()) {
            console.log('mete un correo');
            return;
        }
        if (!password.trim()) {
            console.log('mete contraseña');
            return;
        }
        console.log('validando...');
        register();
    };


    const register = useCallback(async () => {
        try {
            const res = await firebase.auth().createUserWithEmailAndPassword(email, password);
            console.log(res.user);

            let current = firebase.auth().currentUser;
            current.updateProfile({
                displayName: name
            });

            await firebase.firestore().collection('usuarios').doc(res.user.email).set({
                email: res.user.email,
                uid: res.user.uid,
                name: name
            });
            setEmail('');
            setPassword('');
            setUser(res.user.email);
            history.push('/Inicio');
        } catch (err) {
            console.log(err);
            /*             if(err.code === 'auth/invalid-email'){
                            setError('Email no válido')
                        } */
        }
    },
        [email, password, name],
    );

    return (
        <div>
            <Modal isOpen={modalIsOpen}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <div className={classes.paper}>
                        <CardMedia
                            title="logo"
                            image={logoeme}
                            className={classes.logo}
                            component="img"
                        />
                        <Typography component="h1" variant="h5">
                            Registrate
        </Typography>
                        <form className={classes.form} noValidate>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12}>
                                    <TextField
                                        autoComplete="fname"
                                        name="firstName"
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="firstName"
                                        label="First Name"
                                        autoFocus
                                        onChange={e => setName(e.target.value)}
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                        onChange={e => setEmail(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        autoComplete="current-password"
                                        onChange={e => setPassword(e.target.value)}
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
                            <Grid container justify="flex-end">
                                <Grid item>
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="outlined"
                                        color="default"
                                        className={classes.submit}
                                        onClick={closeModalRegister}
                                    >
                                        Cerrar
          </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </div>
                    <Box mt={5}>
                    </Box>
                </Container>
            </Modal>

        </div>
    );
};

export default withRouter(ModalRegister);
