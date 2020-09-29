import React, { useState, useContext, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { firebase } from '../../firebase';
import moment from 'moment';
import 'moment/locale/es';

import { UserContext } from '../../context/UserProvider';

const shortid = require('shortid');

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
  input: {
    display: 'none',
  },
}));

export default function Review() {

  const classes = useStyles();

  const [fileUrl, setFileUrl] = useState(null);
  const [itemQuantity, setItemQuantity] = useState(1);
  const [end, setEnd] = useState(false);

  //Lectura de formularios
  const { userProvider, order, finalOrder, add, setFinalOrder } = useContext(UserContext);



  let time = Date.now();
  let timeFormat = moment(time).format('LLL');


  const handleChangeFile = async e => {
    const file = e.target.files[0];
    const storageRef = firebase.storage().ref('Cotizaciones').child(userProvider.email);
    const fileRef = storageRef.child(file.name);
    console.log(file);
    await fileRef.put(file);
    setFileUrl(await fileRef.getDownloadURL());
    setFinalOrder([
      ...finalOrder, { ...order, file: await fileRef.getDownloadURL(), quantity: itemQuantity, total: order.price * itemQuantity }]
    );
  };

  const handleSubmit = e => {
    e.preventDefault();


    let sumTotal = finalOrder.reduce((sum, { total }) => sum + total, 0); //aqui está el total
    console.log(sumTotal, 'redus');

    if (fileUrl === null) {
      alert('Cargando archivo...');
      return;
    } else {

      const newUserFile = {
        order: finalOrder,
        finalTotal: sumTotal,
        date: time,
        dateFormat: timeFormat,
        email: userProvider.email,
        user: userProvider.displayName,
        status: 'Pendiente',
        folio: shortid.generate()
      };
      //esta sube la imegen 
      firebase.firestore().collection('files').doc().set(newUserFile);
      setFileUrl('');
      setEnd(true);
      //return alert('archivo subido');
    }
  };

  return (

    <React.Fragment>
      {
        end ? (
          <React.Fragment>
            <Typography variant="h5" gutterBottom>
              Gracias por tu orden.
          </Typography>
            <Typography variant="subtitle1">
              Enviamos a tu correo la confirmación de la ordén con datos para realizar el pago. Gracias.
          </Typography>
          </React.Fragment>
        ) : (

            <Fragment>

              {
                add === false ? (<div>
                  <Typography variant="h6" gutterBottom>
                    Papel
          </Typography>
                  <Typography variant="body2">
                    {order.paper}
                  </Typography>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom className={classes.title}>
                      Tamaño
          </Typography>
                    <Typography gutterBottom>
                      {order.size} cm
          </Typography>
                    <Typography variant="h6" gutterBottom className={classes.title}>
                      Cantidad
          </Typography>
                    <Typography gutterBottom>
                      <RemoveIcon onClick={() => setItemQuantity(itemQuantity - 1)} /> {itemQuantity} pzs. <AddIcon onClick={() => setItemQuantity(itemQuantity + 1)} />
                    </Typography>
                    <Typography variant="h6" gutterBottom className={classes.title}>
                      Costo
          </Typography>
                    <List disablePadding>
                      ${order.price} MXN.
          </List>
                    <Typography variant="h6" gutterBottom className={classes.title}>
                      Total
          </Typography>
                    <List disablePadding>
                      ${order.price * itemQuantity} MXN.
          </List>
                  </Grid>

                </div>) : (<div>
                  <Typography variant="h6" gutterBottom>
                    Papel
</Typography>
                  <Typography variant="body2">
                    {order.paper}
                  </Typography>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom className={classes.title}>
                      Tamaño
</Typography>
                    <Typography gutterBottom>
                      {order.size} cm
</Typography>
                    <Typography variant="h6" gutterBottom className={classes.title}>
                      Cantidad
</Typography>
                    <Typography gutterBottom>
                      <RemoveIcon onClick={() => setItemQuantity(itemQuantity - 1)} /> {itemQuantity} pzs. <AddIcon onClick={() => setItemQuantity(itemQuantity + 1)} />
                    </Typography>
                    <Typography variant="h6" gutterBottom className={classes.title}>
                      Costo
</Typography>
                    <List disablePadding>
                      ${order.price} MXN.
</List>
                    <Typography variant="h6" gutterBottom className={classes.title}>
                      Total
</Typography>
                    <List disablePadding>
                      ${order.price * itemQuantity} MXN.
</List>
                  </Grid>
                  <Typography variant="h6" gutterBottom>
                    Orden Final
          </Typography>
                  {
                    finalOrder.map(item => (
                      /* console.log(item) */
                      <div>
                        <Typography variant="h6" gutterBottom>
                          Papel
          </Typography>
                        <Typography variant="body2">
                          {item.paper}
                        </Typography>
                        <Grid item xs={12} sm={6}>
                          <Typography variant="h6" gutterBottom className={classes.title}>
                            Tamaño
          </Typography>
                          <Typography gutterBottom>
                            {item.size} cm
          </Typography>
                          <Typography variant="h6" gutterBottom className={classes.title}>
                            Cantidad
          </Typography>
                          <Typography gutterBottom>
                            {item.quantity}
                          </Typography>
                          <Typography variant="h6" gutterBottom className={classes.title}>
                            Costo
          </Typography>
                          <List disablePadding>
                            ${order.price} MXN.
          </List>
                          <Typography variant="h6" gutterBottom className={classes.title}>
                            Total
          </Typography>
                          <List disablePadding>
                            ${item.total} MXN.
          </List>
                        </Grid>
                      </div>
                    ))
                  }

                </div>)
              }


              <Grid item xs={12} sm={6}>

                <form onSubmit={handleSubmit}>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="outlined-basic"
                    name='file'
                    type='file'
                    onChange={handleChangeFile}
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="outlined"
                    color="default"
                  >Enviar</Button>
                </form>
              </Grid>
            </Fragment>

          )
      }

    </React.Fragment >
  );
}


