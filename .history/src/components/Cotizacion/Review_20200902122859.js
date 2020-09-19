import React, { useEffect, useState, useContext, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import FileCopyIcon from '@material-ui/icons/FileCopy';

import { firebase } from '../../firebase';
import moment from 'moment';
import 'moment/locale/es';

import { UserContext } from '../../context/UserProvider';





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

export default function Review({ firebaseUser, setUsersFiles, usersFiles }) {

  const classes = useStyles();

  const [fileUrl, setFileUrl] = useState(null);
  const [input, setInput] = useState('');
  //const [usersFiles, setUsersFiles] = useState([]);

  //Lectura de formularios

  const { paper, fullPaperName, size, cost, userProvider } = useContext(UserContext);

  //Lectura de precios

  const [precio, setPrecio] = useState([]);

  const [end, setEnd] = useState(false);

  useEffect(() => {
    const fetchGetPrecios = async () => {
      const getPreciosCollection = await firebase
        .firestore()
        .collection('precios')
        .doc('Bamboo')
        .get();
      setPrecio(getPreciosCollection.docs.map(doc => {
        return doc.data();
      }));
    };
    fetchGetPrecios();

  }, [setPrecio]);

  let time = Date.now();
  let timeFormat = moment(time).format('LLL');


  const handleChangeFile = async e => {
    const file = e.target.files[0];
    const storageRef = firebase.storage().ref('Cotizaciones').child(userProvider.email);
    const fileRef = storageRef.child(file.name);
    console.log(file);
    await fileRef.put(file);
    setFileUrl(await fileRef.getDownloadURL());
  };


  const handleSubmit = e => {
    e.preventDefault();

    if (fileUrl === null) {
      alert('Cargando archivo...');
      return;
    } else {

      const newUserFile = {
        //name: username,
        fileLink: fileUrl,
        extra: input,
        paper: fullPaperName,
        size: size,
        total: cost,
        date: time,
        dateFormat: timeFormat,
        email: userProvider.email,
        user: userProvider.displayName,
        status: 'Pendiente',
       
      };
      //esta sube la imegen 
      firebase.firestore().collection('files').doc().set(newUserFile);
      setInput('');
      setFileUrl('');
      setEnd(true);
      return alert('archivo subido');
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
              <Typography variant="h6" gutterBottom>
                Papel
      </Typography>

              <Typography variant="body2">
                {fullPaperName}
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Typography variant="h6" gutterBottom className={classes.title}>
                    Tamaño
          </Typography>
                  <Typography gutterBottom>
                    {size} cm
          </Typography>
                  <Typography variant="h6" gutterBottom className={classes.title}>
                    Costo
          </Typography>
                  <List disablePadding>
                    ${cost} MXN.
          </List>
                </Grid>
                <form onSubmit={handleSubmit}>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="outlined-basic"
                    label="Datos extra"
                    name='extra'
                    onChange={e => setInput(e.target.value)}
                    value={input}
                  />
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


