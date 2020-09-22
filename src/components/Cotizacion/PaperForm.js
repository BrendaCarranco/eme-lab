import React, { useState, useContext } from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

import { UserContext } from '../../context/UserProvider';

import Paper from '@material-ui/core/Paper';


export default function PaperForm() {

  const { paper, setPaper, setFullPaperName, setOrder, order } = useContext(UserContext);

  ///const [value, setValue] = useState('')


  const handleChange = (e) => {
    //setValue(event.target.value);
    setPaper(e.target.value);
    setOrder({ ...order, paper: e.target.name });
    setFullPaperName(e.target.name);
  };

  return (
    <React.Fragment>


      <FormControl component="fieldset">
        <RadioGroup value={paper} onChange={handleChange}>
          <Grid container spacing={3}>

            <Grid item xs={12} sm={6}>
              <Paper elevation={3}>
                <Typography align="center">
                  Hahnemhüle Bamboo  290 g
            </Typography>
                <FormControlLabel name="Hahnemhüle Bamboo  290 g" value="Bamboo" control={<Radio />} />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper elevation={3}>
                <Typography align="center">
                  Hahnemühle Rice Paper 100 g
            </Typography>
                <FormControlLabel name="Hahnemühle Rice Paper 100 g" value="Rice" control={<Radio />} />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper elevation={3}>
                <Typography align="center">
                  Hahnemühle Photo Matt Fibre 200g
            </Typography>
                <FormControlLabel value="Matt" name="Hahnemühle Photo Matt Fibre 200g" control={<Radio />} />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper elevation={3}>
                <Typography align="center">
                  Hahnemühle Photo Silk Baryta 310 g
            </Typography>
                <FormControlLabel value="Silk" name="Hahnemühle Photo Silk Baryta 310 g" control={<Radio />} />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper elevation={3}>
                <Typography align="center">
                  EPSON Pap. Enhanced Mate
            </Typography>
                <FormControlLabel value="EpsonM" name="EPSON Pap. Enhanced Mate" control={<Radio />} />
              </Paper>
            </Grid>
          </Grid>

        </RadioGroup>
      </FormControl>

    </React.Fragment>
  );
}