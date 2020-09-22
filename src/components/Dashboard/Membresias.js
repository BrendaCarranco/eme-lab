import React from 'react'
import Title from './Title'
import { Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';

import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
}));

const Membresias = () => {
    return (
        <React.Fragment>
            <Container maxWidth="xs">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            Precios
            </Typography>
            <Typography variant="h6" align="center" color="textSecondary" component="p">
            En Eme-Lab pensamos en nuestros clientes.
            </Typography>
            </Container>
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
         
        </React.Fragment>
    )
}

export default Membresias