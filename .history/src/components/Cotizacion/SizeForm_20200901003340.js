import React, { useContext, useState, useEffect, Fragment } from 'react';

import { firebase } from '../../firebase';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Paper from '@material-ui/core/Paper';

import { UserContext } from '../../context/UserProvider';

export default function SizeForm() {



  const { setSize, setCost, paper, material, size } = useContext(UserContext);

  const [filter, setFilter] = useState([]);
  const [mapp, setMapp] = useState([]);
  const [paperName, setPaperName] = useState(paper);

  const [id, setId] = useState('');


  const handleChange = (e) => {
    //setValue(event.target.value);
    setId(e.target.name);
    console.log(id);
    setSize(e.target.value);
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

        <RadioGroup value={size} onChange={(e) => handleChange(e)}>

          <Grid container spacing={3}>

            {
              filter.map(a => (
                <Fragment key={a.name}>
                  {
                    a.impresion.map(b => (
                      <Grid item xs={12} sm={6} key={b.medida}>
                        <Paper elevation={3} key={b.medida}>
                          <Typography align="center" >
                            {b.medida} - {b.precio} cm
                            </Typography>
                          <FormControlLabel value={b.precio} name={b.medida} control={<Radio />} />
                        </Paper>
                      </Grid>
                    ))
                  }


                    )

                </Fragment>))
            }



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