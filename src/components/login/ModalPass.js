/* import React, { Fragment, useState } from 'react';
import Modal from 'react-modal'; */

import React, { useState, useCallback, Fragment } from 'react';
import { firebase } from '../../firebase';
import { withRouter } from 'react-router-dom';
import logoeme from '../../img/logoeme.png';
import Modal from 'react-modal';


import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
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

const ModalPass = ({ setModalPass, history }) => {
    const classes = useStyles();

    const [modalIsOpen, setModalIsOpen] = useState(true);
    const [email, setEmail] = useState('');


    const closeModal = () => {
        /*         setModalIsOpen(false);
                setModalPass(false); */
        console.log('cerrar');
        setModalPass(false);
        setModalIsOpen(false);
    };

    const handleReset = e => {
        e.preventDefault();
        if (!email.trim()) {
            console.log('Ingresa tu correo');
            return;
        }
        //setError(null);
        resetPass();
    };

    const resetPass = useCallback(async () => {
        try {
            await firebase.auth().sendPasswordResetEmail(email);
            alert('Enviamos un correo con una liga para restablecer tu contraseña');
            history.push('/signin');

        } catch (error) {
            console.log(error);
            //setError(error.message);
        }
    }, [email, history]);
    return (
        <Fragment>
            {/*             <Modal isOpen={modalIsOpen} >
                <div>
                    <span className="material-icons close" onClick={closeModal} >close</span>
                </div>
                <div>
                    <p className='center-align instruction'>Ingresa tu correo para recuperar tu contraseña</p>
                    <input type='email' className='email-input black-text' ></input>
                </div>
                <div className='submit-btn center-align'>
                    <button className='send-btn'>Enviar</button>
                </div>
            </Modal> */}
            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} >

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
                            Recupera tu contraseña
        </Typography>
                        <form className={classes.form} noValidate >
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12}>
                                    <TextField
                                        autoComplete="email"
                                        name="Correo"
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="emailPass"
                                        label="Email"
                                        autoFocus
                                        onChange={e => setEmail(e.target.value)}
                                    />
                                </Grid>
                            </Grid>
                            <Grid container justify="flex-end">
                                <Grid item>
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="outlined"
                                        color="default"
                                        className={classes.submit}
                                        onClick={handleReset}
                                    >
                                        Enviar
          </Button>
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="outlined"
                                        color="default"
                                        className={classes.submit}
                                        onClick={closeModal}
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
        </Fragment>
    );
};

export default withRouter(ModalPass);
