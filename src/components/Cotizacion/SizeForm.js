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

  const { setSize, setCost, paper, material, order, setOrder, setFinalOrder, finalOrder } = useContext(UserContext);

  const [filter, setFilter] = useState([]);
  const [mapp, setMapp] = useState([]);
  const [paperName, setPaperName] = useState(paper);

  const [subIndex, setSubIndex] = useState('');


  const handleChange = (e) => {
    setSize(e.target.name);
    setCost(e.target.value);
    setOrder({ ...order, size: e.target.name, price: e.target.value });


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
        <RadioGroup value={subIndex} onChange={(e) => handleChange(e)}>
          <Grid container spacing={3}>
            {
              filter.map((a, index) => (
                <Fragment key={a.name}>
                  {
                    a.impresion.map((b, subindex) => (
                      <Grid item xs={12} sm={6} key={b.medida}>
                        <Paper elevation={3} key={b.medida}>
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
                        <Paper elevation={3} key={b.medida}>
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