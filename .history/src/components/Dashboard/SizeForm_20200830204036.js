import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';

export default function SizeForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Selecciona el tamaño
      </Typography>
      <Grid container spacing={3}>
         <Grid item xs={12} sm={6}> 
          <Paper elevation={3}>
            <Typography align="center">
            21.6x27.9 cm 
            </Typography>
            <Checkbox/>
          </Paper>
          </Grid>
          <Grid item xs={12} sm={6}> 
          <Paper elevation={3}>
            <Typography align="center">
            27.9x43.2 cm
            </Typography>
            <Checkbox/>
          </Paper>
          </Grid>
          <Grid item xs={12} sm={6}> 
          <Paper elevation={3}>
            <Typography align="center">
            33x48.3 cm 
            </Typography>
            <Checkbox/>
          </Paper>
          </Grid>
          <Grid item xs={12} sm={6}> 
          <Paper elevation={3}>
            <Typography align="center">
            43.2x56 cm 
            </Typography>
            <Checkbox/>
          </Paper>
          </Grid>
          <Grid item xs={12} sm={6}> 
          <Paper elevation={3}>
            <Typography align="center">
            60x90 cm
            </Typography>
            <Checkbox/>
          </Paper>
          </Grid>
          <Grid item xs={12} sm={6}> 
          <Paper elevation={3}>
            <Typography align="center">
            89x117 cm 
            </Typography>
            <Checkbox/>
          </Paper>
          </Grid>
          <Grid item xs={12} sm={6}> 
          <Paper elevation={3}>
            <Typography align="center">
            110x100 cm
            </Typography>
            <Checkbox/>
          </Paper>
          </Grid>
          <Grid item xs={12} sm={6}> 
          <Paper elevation={3}>
            <Typography align="center">
            110x165 cm
            </Typography>
            <Checkbox/>
          </Paper>
          </Grid>
      </Grid>
      <Typography variant="h6" gutterBottom>
        Paquetes de impresiones
      </Typography>
      <Grid container spacing={3}>
         <Grid item xs={12} sm={6}> 
          <Paper elevation={3}>
            <Typography align="center">
            21.6x27.9 cm 
            </Typography>
            <Checkbox/>
          </Paper>
          </Grid>
          <Grid item xs={12} sm={6}> 
          <Paper elevation={3}>
            <Typography align="center">
            27.9x43.2 cm
            </Typography>
            <Checkbox/>
          </Paper>
          </Grid>
          <Grid item xs={12} sm={6}> 
          <Paper elevation={3}>
            <Typography align="center">
            33x48.3 cm 
            </Typography>
            <Checkbox/>
          </Paper>
          </Grid>
          <Grid item xs={12} sm={6}> 
          <Paper elevation={3}>
            <Typography align="center">
            43.2x56 cm 
            </Typography>
            <Checkbox/>
          </Paper>
          </Grid>
          <Grid item xs={12} sm={6}> 
          <Paper elevation={3}>
            <Typography align="center">
            60x90 cm
            </Typography>
            <Checkbox/>
          </Paper>
          </Grid>
          <Grid item xs={12} sm={6}> 
          <Paper elevation={3}>
            <Typography align="center">
            89x117 cm 
            </Typography>
            <Checkbox/>
          </Paper>
          </Grid>
          <Grid item xs={12} sm={6}> 
          <Paper elevation={3}>
            <Typography align="center">
            110x100 cm
            </Typography>
            <Checkbox/>
          </Paper>
          </Grid>
          <Grid item xs={12} sm={6}> 
          <Paper elevation={3}>
            <Typography align="center">
            110x165 cm
            </Typography>
            <Checkbox/>
          </Paper>
          </Grid>
      </Grid>
    </React.Fragment>
  );
}