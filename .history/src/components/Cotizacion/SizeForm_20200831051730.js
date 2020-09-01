import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Paper from '@material-ui/core/Paper';

export default function SizeForm() {
  const [value2, setValue] = React.useState();

  const handleChange = (event) => {
    setValue(event.target.value2);
  };
   
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Selecciona el tamaño
      </Typography>
      <FormControl component="fieldset">
      <RadioGroup  value2={value2} onChange={handleChange}>
      <Grid container spacing={3}>
         <Grid item xs={12} sm={6}> 
          <Paper elevation={3}>
            <Typography align="center">
            21.6x27.9 cm 
            </Typography>
            <FormControlLabel value2="veintiuno" control={<Radio />} />
          </Paper>
          </Grid>
          <Grid item xs={12} sm={6}> 
          <Paper elevation={3}>
            <Typography align="center">
            27.9x43.2 cm
            </Typography>
            <FormControlLabel value2="veintisiete" control={<Radio />} />
          </Paper>
          </Grid>
          <Grid item xs={12} sm={6}> 
          <Paper elevation={3}>
            <Typography align="center">
            33x48.3 cm 
            </Typography>
            <FormControlLabel value2="treinta" control={<Radio />} />
          </Paper>
          </Grid>
          <Grid item xs={12} sm={6}> 
          <Paper elevation={3}>
            <Typography align="center">
            43.2x56 cm 
            </Typography>
            <FormControlLabel value2="cuarenta" control={<Radio />} />
          </Paper>
          </Grid>
          <Grid item xs={12} sm={6}> 
          <Paper elevation={3}>
            <Typography align="center">
            60x90 cm
            </Typography>
            <FormControlLabel value2="sesenta" control={<Radio />} />
          </Paper>
          </Grid>
          <Grid item xs={12} sm={6}> 
          <Paper elevation={3}>
            <Typography align="center">
            89x117 cm 
            </Typography>
            <FormControlLabel value2="ochenta" control={<Radio />} />
          </Paper>
          </Grid>
          <Grid item xs={12} sm={6}> 
          <Paper elevation={3}>
            <Typography align="center">
            110x100 cm
            </Typography>
            <FormControlLabel value2="cien" control={<Radio />} />
          </Paper>
          </Grid>
          <Grid item xs={12} sm={6}> 
          <Paper elevation={3}>
            <Typography align="center">
            110x165 cm
            </Typography>
            <FormControlLabel value2="cientodiez" control={<Radio />} />
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
            <FormControlLabel value2="impdcatorce" control={<Radio />} />
          </Paper>
          </Grid>
          <Grid item xs={12} sm={6}> 
          <Paper elevation={3}>
            <Typography align="center">
            10 impresiones 21.5x28 cm
            </Typography>
            <FormControlLabel value2="impdveinte" control={<Radio />} />
          </Paper>
          </Grid>
          <Grid item xs={12} sm={6}> 
          <Paper elevation={3}>
            <Typography align="center">
            10 impresiones 30x40 cm 
            </Typography>
            <FormControlLabel value2="impdcuarenta" control={<Radio />} />
          </Paper>
          </Grid>
          <Grid item xs={12} sm={6}> 
          <Paper elevation={3}>
            <Typography align="center">
            20 impresiones 21.5x14 cm 
            </Typography>
            <FormControlLabel value2="impvcatorce" control={<Radio />} />
          </Paper>
          </Grid>
          <Grid item xs={12} sm={6}> 
          <Paper elevation={3}>
            <Typography align="center">
            20 impresiones 21.5x28 cm 
            </Typography>
            <FormControlLabel value2="impveinte" control={<Radio />} />
          </Paper>
          </Grid>
          <Grid item xs={12} sm={6}> 
          <Paper elevation={3}>
            <Typography align="center">
            20 impresiones 30x40 cm
            </Typography>
            <FormControlLabel value2="impdveinte" control={<Radio />} />
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