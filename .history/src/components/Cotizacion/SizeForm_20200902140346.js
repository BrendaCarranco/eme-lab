import React, { useContext, useState, useEffect, Fragment } from 'react';

import { firebase } from '../../firebase';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';

import { UserContext } from '../../context/UserProvider';


const useStyles = makeStyles((theme) => ({
  paper: {
    alignItems: 'center',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      padding: theme.spacing(3),
    },
  },


}));


export default function SizeForm() {
  const classes = useStyles();

  const { setSize, setCost, paper, material } = useContext(UserContext);

  const [filter, setFilter] = useState([]);
  const [mapp, setMapp] = useState([]);
  const [paperName, setPaperName] = useState(paper);

  const [subIndex, setSubIndex] = useState('');


  const handleChange = (e) => {
    setSize(e.target.name);
    setCost(e.target.value);
  };
  useEffect(() => {
    filterData();
  }, []);

  const filterData = (paper) => {
    try {
      const filtro = material.filter(mat => mat.id === paperName);
      const mapa = filtro.map(a => a.impresion);
      setMapp(mapa);
      setFilter(filtro);
    } catch (err) {
      console.log(err);
    }
  };



  console.log(mapp);

  return (
    <React.Fragment>

      <Typography variant="h6" gutterBottom>
        Selecciona el tamaño
      </Typography>
      <FormControl component="fieldset">
        <RadioGroup value={subIndex} align="center" onChange={(e) => handleChange(e)}>
          <Grid container spacing={3}>
            {
              filter.map((a, index) => (
                <Fragment key={a.name}>
                  {
                    a.impresion.map((b, subindex) => (
                      <Grid item xs={6} sm={3} key={b.medida}>
                        <Paper elevation={3} key={b.medida} className={classes.paper}>
                          <Typography align="center" >
                            {b.medida} cm <br/> ${b.precio} MXN.
                          </Typography>
                          <FormControlLabel
                            value={b.precio}
                            name={b.medida}
                            control={<Radio color="default"/>}
                            onChange={() => (setSubIndex(b.precio))} />
                        </Paper>
                      </Grid>
                    ))
                  }


                </Fragment>))
            }


          </Grid>


          <Typography variant="h6" gutterBottom>
            Paquetes de impresiones
          </Typography>

          <Grid container spacing={3}>



            {
              filter.map((a, index) => (
                <Fragment key={a.name}>
                  {
                    a.volumen.map((b, subindex) => (
                      <Grid item xs={12} sm={6} key={b.medida}>
                        <Paper elevation={3} key={b.medida} className={classes.paper}>
                          <Typography align="center" >
                            {b.medida} cm - ${b.precio} MXN.
                          </Typography>
                          <FormControlLabel
                            value={b.precio}
                            name={b.medida}
                            control={<Radio />}
                            onChange={() => (setSubIndex(b.precio))} />
                        </Paper>
                      </Grid>
                    ))
                  }


                </Fragment>))
            }

          </Grid>
          <Typography variant="h8" gutterBottom>
            *Incluyen caja conservativa
      </Typography>
        </RadioGroup>
      </FormControl>

    </React.Fragment>
  );

}