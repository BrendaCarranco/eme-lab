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

const ModalPass = ({ setModalPass, history }) => {
    const classes = useStyles();

    const [modalIsOpen, setModalIsOpen] = useState(true);
    const [email, setEmail] = useState('');
    const [instructions, setInstructions] = useState(false);


    const closeModal = () => {
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
            setEmail('');
            setInstructions(true);
            //history.push('/signin');

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
            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} appElement={document.getElementById('root')} >

                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <div className={classes.paper}>
                        <CardMedia
                            title="logo"
                            image={logoeme}
                            className={classes.logo}
                            component="img"
                        />
                        <Typography component="h1" variant="h6">
                            Recuperar contraseña
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
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                    />
                                </Grid>
                            </Grid>
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

                            {
                                instructions === true && (<Typography variant="body2"     >
                                    Te enviamos un correo con la liga para recuperar tu contraseña.
                                    Si no encuentras el correo en tu bandeja de entrada, revisa también tu carpeta de correo no deseado.
                                </Typography>)
                            }




                            <Grid container justify="flex-end">
                                <Grid item>

                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
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