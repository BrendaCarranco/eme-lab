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
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import CardMedia from '@material-ui/core/CardMedia';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import logoeme from '../../img/logoeme.png';


const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  logo: {
    height: '145px',
    width: '245px',
    paddingTop:'40px',
    paddingLeft:'20px',
  },
  button: {
    paddingTop:'100px',
    fontSize: '23px',
    textTransform: 'none',
  },
  toolbar: {
  
    height: '180px',
  
  },
  grow: {
    flexGrow: 1,
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
          <AppBar position="sticky" className={classes.toolbar} color="inherent" elevation={0}>
        <Toolbar>
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
