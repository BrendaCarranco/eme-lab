import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';

import setValue from './PaperForm';
import SizeForm from './SizeForm';



const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function Review() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Papel Seleccionado
      </Typography>
      <List disablePadding>
        
          <ListItem className={classes.listItem} >
            <ListItemText />
            <Typography variant="body2">{setValue}</Typography>
          </ListItem>
      
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
           Tamaño Seleccionado
          </Typography>
          
          <Typography gutterBottom></Typography>
        </Grid>
        
      </Grid>
    </React.Fragment>
  );
}