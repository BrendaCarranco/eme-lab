import React, { useState, useCallback } from 'react';
import { firebase } from '../../firebase';
import { withRouter } from 'react-router-dom';
import logoeme from '../../img/logoeme.png';

import ModalPass from './ModalPass';

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
import ModalRegister from './ModalRegister';
import { Modal } from '@material-ui/core';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Eme-Lab
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

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
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  paperModal: {

    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],

    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

const SignInSide = (props) => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState('');
  const [loginForm, setLoginForm] = useState(true);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const handleLogin = (e) => {
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
    login();
  };

  const login = useCallback(async () => {
    try {
      const res = await firebase.auth().signInWithEmailAndPassword(email, password);
      console.log(res.user);
      setUser(res.user.email);
      props.history.push('/dashboard');
    } catch (err) {
      console.log(err);
      if (err.code === "auth/user-not-found") {
        alert('correo no valido');
      }
    }

  }, [email, password]);


  const body = (
    <div className={classes.paper} className={classes.paperModal}>
      <ModalPass />
    </div>
  );

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <CardMedia
            title="logo"
            image={logoeme}
            className={classes.logo}
            component="img"
          />

          {
            loginForm ? (
              <form className={classes.form} noValidate
                onSubmit={handleLogin}>
                <TextField

                  margin="normal"
                  required
                  fullWidth
                  id="outlined-basic"
                  label="Correo"

                  autoComplete="email"
                  autoFocus
                  onChange={e => setEmail(e.target.value)}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth

                  label="Contraseña"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={e => setPassword(e.target.value)}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="outlined"
                  color="default"
                  className={classes.submit}
                >
                  Iniciar Sesión
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link variant="body2" color="inherit" onClick={() => setLoginForm(false)}>
                      {"¿No tienes una cuenta? Registrate"}
                    </Link>
                  </Grid>
                  <Grid item>
                  </Grid>
                </Grid>

              </form>) : (<ModalRegister setLoginForm={setLoginForm} />)

          }
          <div>
            <Grid item>
              <Link variant="body2" color="inherit" onClick={handleOpen}>¿Olvidaste tu contraseña?</Link>
            </Grid>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
            >
              {body}
            </Modal>
          </div>
          <Box mt={5}>
            <Copyright />
          </Box>

        </div>
      </Grid>
    </Grid>
  );
};
export default withRouter(SignInSide);