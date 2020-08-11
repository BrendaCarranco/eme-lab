import React, { useState, useCallback } from 'react';
import { firebase } from '../../firebase';
import {withRouter} from 'react-router-dom'
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

const SignInSide = (props) => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState('');
  const [name, setName] = useState('');

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const closeModal = () => {
    setModalIsOpen(false)
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
        props.history.push('/Inicio')
    } catch (err) {
        console.log(err);
        if (err.code === "auth/user-not-found") {
            alert('correo no valido');
        }
    }

}, [email, password]);


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
          
            
         
         
          <form className={classes.form} noValidate
          onSubmit={handleLogin}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="outlined-basic"
              label="Correo Electronico"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={e => setEmail(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
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
              Inicia Sesión
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2" color="inherit">
                  ¿Olvidaste tu contraseña?
                </Link>
              </Grid>
              <Grid item>
                <Link variant="body2" color="inherit"
                onClick={() => setModalIsOpen(true)} >
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
              />
            </Grid>
            
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="outlined"
            color="default"
            className={classes.submit}
          >
            Iniciar Sesión
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
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
        <Copyright />
      </Box>
  </Container>
                   </Modal>
                  {"No tienes una cuenta? Registrate"}
                </Link>
              </Grid>
            </Grid>
            
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};
export default withRouter(SignInSide);