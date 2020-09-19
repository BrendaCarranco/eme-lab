import React, { useState, useContext } from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

import {UserContext} from '../../context/UserProvider';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },



}));

export default function PaperForm() {
  const classes = useStyles();

  const { paper, setPaper, setFullPaperName } = useContext(UserContext);

  ///const [value, setValue] = useState('')


  const handleChange = (e) => {
    //setValue(event.target.value);
    setPaper(e.target.value);
    setFullPaperName(e.target.name);
  };

  return (
    <React.Fragment>


      <FormControl component="fieldset">
        <RadioGroup value={paper} onChange={handleChange}>
          <Grid container spacing={3}  justify="center" alignItems="center">

            <Grid item xs={12} sm={6}>
              <Paper elevation={3} className={classes.paper}>
                <Typography align="center">
                  Hahnemhüle Bamboo  290 gr.
            </Typography>
                <FormControlLabel name="Hahnemhüle Bamboo  290 g" value="Bamboo" control={<Radio />} />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper elevation={3} className={classes.paper}>
                <Typography align="center">
                  Hahnemühle Rice Paper 100 gr.
            </Typography>
                <FormControlLabel name="Hahnemühle Rice Paper 100 g" value="Rice" control={<Radio />} />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper elevation={3} className={classes.paper}>
                <Typography align="center">
                  Hahnemühle Photo Matt Fibre 200 gr.
            </Typography>
                <FormControlLabel value="Matt" name="Hahnemühle Photo Matt Fibre 200g" control={<Radio />} />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper elevation={3} className={classes.paper}>
                <Typography align="center">
                  Hahnemühle Photo Silk Baryta 310 gr.
                </Typography>
                <FormControlLabel value="Silk" name="Hahnemühle Photo Silk Baryta 310 g" control={<Radio />} />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper elevation={3} className={classes.paper}>
                <Typography align="center">
                  EPSON Pap. Enhanced Mate
                </Typography>
                <FormControlLabel value="EpsonM" name="EPSON Pap. Enhanced Mate" control={<Radio />} />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper elevation={3} className={classes.paper}>
                <Typography align="center">
                  EPSON Pap. Premium Glossy o Luster
                </Typography>
                <FormControlLabel value="EpsonG" name="EPSON Pap. Enhanced Mate" control={<Radio />} />
              </Paper>
            </Grid>
          </Grid>

        </RadioGroup>
      </FormControl>

    </React.Fragment>
  );
}