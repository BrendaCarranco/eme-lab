import React, { useState, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { firebase } from '../../firebase';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import CardMedia from '@material-ui/core/CardMedia';
import ListAltIcon from '@material-ui/icons/ListAlt';
import LayersIcon from '@material-ui/icons/Layers';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import logoeme from '../../img/logoeme.png';
import Cotizacion from './Cotizacion.js';
import Historial from './Historial.js';
import Membresias from './Membresias.js';
import Checkout from '../Cotizacion/Checkout.js';

import { UserContext } from '../../context/UserProvider';


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

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  grow: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  logo: {
    height: '60px',
    width: '129px',
    paddingTop:'10px',
    paddingLeft:'20px',
  },
 
}));

const Dashboard = ({ firebaseUser, history, setUsersFiles, usersFiles, fbMail }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const [newCot, setNewCot] = useState(true);
  const [newHistory, setNewHistory] = useState(false);
  const [newMeber, setNewMember] = useState(false);

  const { userProvider } = useContext(UserContext);

  const userLogout = () => {
    firebase.auth().signOut();
    history.push('/signin');

    console.log('cerrando sesión');
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleNewCot = () => {
    setNewCot(true);
    setNewHistory(false);
    setNewMember(false);
  };

  const handleHistory = () => {
    setNewHistory(true);
    setNewCot(false);
    setNewMember(false);

  };

  const handleMember = () => {
    setNewMember(true);
    setNewHistory(false);
    setNewCot(false);
  };

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar color="inherent" position="absolute" elevation={0} className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <CardMedia
            title="logo"
            image={logoeme}
            className={classes.logo}
            component="img"
            noWrap
          />
          <div className={classes.grow} />
          
          <IconButton color="inherit" edge="end" onClick={userLogout}>
            <Badge color="secondary">
              <ExitToAppIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <List>
          <ListItem>
            <ListItemIcon>
              <AccountBoxIcon />
            </ListItemIcon>
            <Typography variant="h6" color="initial">
              {userProvider.displayName}
            </Typography>
          </ListItem>
        </List>
        <Divider />
        <ListItem button onClick={handleNewCot} >
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Nueva Cotización" />
        </ListItem>

        <ListItem button onClick={handleHistory}>
          <ListItemIcon>
            <ListAltIcon />
          </ListItemIcon>
          <ListItemText primary="Historial" />
        </ListItem>

        <ListItem button onClick={handleMember}>
          <ListItemIcon>
            <LayersIcon />
          </ListItemIcon>
          <ListItemText primary="Membresías" />
        </ListItem>

        <Divider />
      </Drawer >

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {
              newCot ? (
                <Grid item xs={12} md={12} lg={12}>
                  <Paper className={fixedHeightPaper}>
                    <Checkout setUsersFiles={setUsersFiles} />
                  </Paper>
                </Grid>) : (null)
            }
            {
              newHistory ? (
                <Grid item xs={12}>
                  <Paper className={classes.paper}>
                    <Historial setUsersFiles={setUsersFiles} usersFiles={usersFiles} fbMail={fbMail} />
                  </Paper>
                </Grid>) : (null)
            }
            {
              newMeber ? (
                <Grid item xs={12}>
                  <Paper className={classes.paper}>
                    <Membresias />
                  </Paper>
                </Grid>) : (null)
            }
          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div >
  );
};
export default withRouter(Dashboard);