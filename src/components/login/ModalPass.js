import React, { useState, useCallback, Fragment } from 'react';
import { firebase } from '../../firebase';
import { withRouter } from 'react-router-dom';
import logoeme from '../../img/logoeme.png';
//import Modal from 'react-modal';
import Modal from '@material-ui/core/Modal';


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
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const ModalPass = ({ history }) => {
    const classes = useStyles();

    const [email, setEmail] = useState('');
    const [instructions, setInstructions] = useState(false);

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
                    </form>
                </div>
                <Box mt={5}>
                </Box>
            </Container>
        </Fragment>
    );
};

export default withRouter(ModalPass);
