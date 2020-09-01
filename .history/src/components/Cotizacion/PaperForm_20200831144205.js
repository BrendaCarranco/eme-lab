import React, { useState, useContext } from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

import {UserContext} from '../../context/UserProvider'

import Paper from '@material-ui/core/Paper';


export default function PaperForm() {

const {setOrder, order} = useContext(UserContext)

///const [value, setValue] = useState('')
 

  const handleChange = (event) => {
    //setValue(event.target.value);
    setOrder(event.target.value)
  };
   
  return (
    <React.Fragment>
      
      
      <FormControl component="fieldset">
      <RadioGroup  value={value} onChange={handleChange}>
      <Grid container spacing={3}>

        <Grid item xs={12} sm={6}> 
          <Paper elevation={3}>
            <Typography align="center">
              Hahnemhüle Bamboo  290 g 
            </Typography>
            <FormControlLabel id="Bamboo" value="bamboo" control={<Radio />} />
          </Paper>
          </Grid>
          <Grid item xs={12} sm={6}> 
          <Paper elevation={3}>
            <Typography align="center">
            Hahnemühle Rice Paper 100 g
            </Typography>
            <FormControlLabel id="Rice" value="rice" control={<Radio />} />
          </Paper>
          </Grid>
          <Grid item xs={12} sm={6}> 
          <Paper elevation={3}>
            <Typography align="center">
            Hahnemühle Photo Matt Fibre 200g 
            </Typography>
            <FormControlLabel id="Matt" value="matt" control={<Radio />} />
          </Paper>
          </Grid>
          <Grid item xs={12} sm={6}> 
          <Paper elevation={3}>
            <Typography align="center">
            Hahnemühle Photo Silk Baryta 310 g
            </Typography>
            <FormControlLabel id="Silk" value="silk" control={<Radio />} />
          </Paper>
          </Grid>
          <Grid item xs={12} sm={6}> 
          <Paper elevation={3}>
            <Typography align="center">
            EPSON Pap. Enhanced Mate 
            </Typography>
            <FormControlLabel id="Epson" value="epson" control={<Radio />} />
          </Paper>
          </Grid>
          </Grid>
        
          </RadioGroup>
        </FormControl> 
     
    </React.Fragment>
  );
}