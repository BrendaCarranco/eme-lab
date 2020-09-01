import React, {useContext} from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Paper from '@material-ui/core/Paper';

import {UserContext} from '../../context/UserProvider'

export default function SizeForm() {

  const [value, setValue] = React.useState();





  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Selecciona el tamaño
      </Typography>
      <FormControl component="fieldset">
      <RadioGroup  value={value} onChange={handleChange}>
      <Grid container spacing={3}>
         <Grid item xs={12} sm={6}> 
          <Paper elevation={3}>
            <Typography align="center">
            21.6x27.9 cm 
            </Typography>
            <FormControlLabel value="veintiuno" control={<Radio />} />
          </Paper>
          </Grid>
          <Grid item xs={12} sm={6}> 
          <Paper elevation={3}>
            <Typography align="center">
            27.9x43.2 cm
            </Typography>
            <FormControlLabel value="veintisiete" control={<Radio />} />
          </Paper>
          </Grid>
          <Grid item xs={12} sm={6}> 
          <Paper elevation={3}>
            <Typography align="center">
            33x48.3 cm 
            </Typography>
            <FormControlLabel value="treinta" control={<Radio />} />
          </Paper>
          </Grid>
          <Grid item xs={12} sm={6}> 
          <Paper elevation={3}>
            <Typography align="center">
            43.2x56 cm 
            </Typography>
            <FormControlLabel value="cuarenta" control={<Radio />} />
          </Paper>
          </Grid>
          <Grid item xs={12} sm={6}> 
          <Paper elevation={3}>
            <Typography align="center">
            60x90 cm
            </Typography>
            <FormControlLabel value="sesenta" control={<Radio />} />
          </Paper>
          </Grid>
          <Grid item xs={12} sm={6}> 
          <Paper elevation={3}>
            <Typography align="center">
            89x117 cm 
            </Typography>
            <FormControlLabel value="ochenta" control={<Radio />} />
          </Paper>
          </Grid>
          <Grid item xs={12} sm={6}> 
          <Paper elevation={3}>
            <Typography align="center">
            110x100 cm
            </Typography>
            <FormControlLabel value="cien" control={<Radio />} />
          </Paper>
          </Grid>
          <Grid item xs={12} sm={6}> 
          <Paper elevation={3}>
            <Typography align="center">
            110x165 cm
            </Typography>
            <FormControlLabel value="cientodiez" control={<Radio />} />
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
            10 impresiones 21.5x14 cm
            </Typography>
            <FormControlLabel value="impdcatorce" control={<Radio />} />
          </Paper>
          </Grid>
          <Grid item xs={12} sm={6}> 
          <Paper elevation={3}>
            <Typography align="center">
            10 impresiones 21.5x28 cm
            </Typography>
            <FormControlLabel value="impdveinte" control={<Radio />} />
          </Paper>
          </Grid>
          <Grid item xs={12} sm={6}> 
          <Paper elevation={3}>
            <Typography align="center">
            10 impresiones 30x40 cm 
            </Typography>
            <FormControlLabel value="impdcuarenta" control={<Radio />} />
          </Paper>
          </Grid>
          <Grid item xs={12} sm={6}> 
          <Paper elevation={3}>
            <Typography align="center">
            20 impresiones 21.5x14 cm 
            </Typography>
            <FormControlLabel value="impvcatorce" control={<Radio />} />
          </Paper>
          </Grid>
          <Grid item xs={12} sm={6}> 
          <Paper elevation={3}>
            <Typography align="center">
            20 impresiones 21.5x28 cm 
            </Typography>
            <FormControlLabel value="impveinte" control={<Radio />} />
          </Paper>
          </Grid>
          <Grid item xs={12} sm={6}> 
          <Paper elevation={3}>
            <Typography align="center">
            20 impresiones 30x40 cm
            </Typography>
            <FormControlLabel value="impvcuarenta" control={<Radio />} />
          </Paper>
          </Grid>
          </Grid>
          <Typography variant="h8" gutterBottom>
        *Incluyen caja conservativa
      </Typography>
      </RadioGroup>
        </FormControl> 
     
    </React.Fragment>
  );
}