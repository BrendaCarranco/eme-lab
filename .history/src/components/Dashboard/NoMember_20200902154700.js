import React from 'react';
import { withRouter } from 'react-router-dom';
import { firebase } from '../../firebase';
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import clsx from 'clsx';

import logoeme from '../../img/logoeme.png';

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

const NoMember = (props) => {
  const classes = useStyles();
    const logOut = () => {
        firebase.auth().signOut()
            .then(() => {
                props.history.push('/');
            });
    };
    return (
        <React.Fragment>
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
          <Box p={5}></Box>
        <Container maxWidth="lg">
        <Typography component="h3" variant="h4" align="center" color="textPrimary" gutterBottom>
          Precios
        </Typography>
        <Typography variant="h6" align="center" color="textSecondary" component="p">
        En Eme-Lab pensamos en nuestros clientes.
        </Typography>
        
        <Grid container spacing={3}>
        <Grid item xs={4}>
        <Paper>
            <Card>
            <CardHeader
              title='Especial'
              subheader=''
            
            
            />
            <CardContent>
              <div>
                <Typography component="h2" variant="h3" color="textPrimary">
                  $ 100
                </Typography>
                <Typography variant="h6" color="textSecondary">
                  /mes
                </Typography>
              </div>
             
            </CardContent>
            
          </Card>
          </Paper>
        </Grid>
        <Grid item xs={4}>
        <Paper >
        <Card>
            <CardHeader
              title='Premium'
              subheader=''
            
            
            />
            <CardContent>
              <div>
                <Typography component="h2" variant="h3" color="textPrimary">
                  $ 300
                </Typography>
                <Typography variant="h6" color="textSecondary">
                  /mes
                </Typography>
              </div>
             
            </CardContent>
            
          </Card>
        </Paper>
        </Grid>
        <Grid item xs={4}>
        <Paper >
        <Card>
            <CardHeader
              title='Gold'
              subheader=''
            
            
            />
            <CardContent>
              <div>
                <Typography component="h2" variant="h3" color="textPrimary">
                  $ 500
                </Typography>
                <Typography variant="h6" color="textSecondary">
                  /mes
                </Typography>
              </div>
             
            </CardContent>
            
          </Card>
        </Paper>
        </Grid>
        </Grid>
        </Container>
     
    </React.Fragment>
    );
};

export default withRouter(NoMember);
