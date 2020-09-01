import React, { useState }  from 'react';
import { firebase } from '../../firebase';
import moment from 'moment';
import 'moment/locale/es';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';


export default function PaperForm() {
   
  return (
    <React.Fragment>
      <Grid container spacing={3}>
       
        <Grid item xs={12} sm={6}> 
          <Paper elevation={3}>
            <Typography align="center">
              Hahnemhüle Bamboo  290 g 
            </Typography>
            <Checkbox/>
          </Paper>
          </Grid>
          <Grid item xs={12} sm={6}> 
          <Paper elevation={3}>
            <Typography align="center">
            Hahnemühle Rice Paper 100 g
            </Typography>
            <Checkbox/>
          </Paper>
          </Grid>
          <Grid item xs={12} sm={6}> 
          <Paper elevation={3}>
            <Typography align="center">
            Hahnemühle Photo Matt Fibre 200g 
            </Typography>
            <Checkbox/>
          </Paper>
          </Grid>
          <Grid item xs={12} sm={6}> 
          <Paper elevation={3}>
            <Typography align="center">
            Hahnemühle Photo Silk Baryta 310 g
            </Typography>
            <Checkbox/>
          </Paper>
          </Grid>
          <Grid item xs={12} sm={6}> 
          <Paper elevation={3}>
            <Typography align="center">
            EPSON Pap. Enhanced Mate 
            </Typography>
            <Checkbox/>
          </Paper>
          </Grid>
        
   
        
      </Grid>
    </React.Fragment>
  );
}