import React, { useState }  from 'react';
import { firebase } from '../../firebase';
import moment from 'moment';
import 'moment/locale/es';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

import Paper from '@material-ui/core/Paper';


export default function PaperForm() {

  const [value, setValue] = React.useState('female');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
   
  return (
    <React.Fragment>
      
      
      <Grid container spacing={3}>
      <FormControl component="fieldset">
      <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
        <Grid item xs={12} sm={6}> 
          <Paper elevation={3}>
            <Typography align="center">
              Hahnemhüle Bamboo  290 g 
            </Typography>
            <FormControlLabel value="female" control={<Radio />} />
          </Paper>
          </Grid>
          <Grid item xs={12} sm={6}> 
          <Paper elevation={3}>
            <Typography align="center">
            Hahnemühle Rice Paper 100 g
            </Typography>
            <FormControlLabel value="female" control={<Radio />} />
          </Paper>
          </Grid>
          <Grid item xs={12} sm={6}> 
          <Paper elevation={3}>
            <Typography align="center">
            Hahnemühle Photo Matt Fibre 200g 
            </Typography>
            <FormControlLabel value="female" control={<Radio />} />
          </Paper>
          </Grid>
          <Grid item xs={12} sm={6}> 
          <Paper elevation={3}>
            <Typography align="center">
            Hahnemühle Photo Silk Baryta 310 g
            </Typography>
            <FormControlLabel value="female" control={<Radio />} />
          </Paper>
          </Grid>
          <Grid item xs={12} sm={6}> 
          <Paper elevation={3}>
            <Typography align="center">
            EPSON Pap. Enhanced Mate 
            </Typography>
            <FormControlLabel value="female" control={<Radio />} />
          </Paper>
          </Grid>
        
          </RadioGroup>
        </FormControl> 
      </Grid>
    </React.Fragment>
  );
}