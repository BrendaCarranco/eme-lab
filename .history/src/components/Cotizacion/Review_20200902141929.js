import React, { useEffect, useState, useContext, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
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
  const shortid = require('shortid');

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
        folio: shortid.generate()
       
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
              <Grid container spacing={2}>
              <Typography variant="h6" gutterBottom>
                Papel
              </Typography>

              <Typography variant="body2">
                {fullPaperName}
              </Typography>
              
                <Grid item xs={12} sm={6}>
                <Box fontStyle="italic" m={1}>
                  <Typography variant="h5" gutterBottom className={classes.title}>
                    Tamaño
                  </Typography>
                </Box>  
                  <Typography gutterBottom>
                    {size} cm
                  </Typography>
                <Box fontStyle="italic" m={1}>  
                  <Typography variant="h5" gutterBottom className={classes.title}>
                    Costo
                  </Typography>
                </Box>   
                  <Typography gutterBottom>
                    ${cost} MXN.
                   </Typography>
                </Grid>
                <form onSubmit={handleSubmit} aling="center">
                  <TextField
                    color="default"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="outlined-basic"
                    label="Datos extra"
                    name='extra'
                    onChange={e => setInput(e.target.value)}
                    value={input}
                  />
                  <input
                  
                  className={classes.input}
                  id="contained-button-file"
                  multiple
                  type="file"
                  onChange={handleChangeFile}
                  />
                  <label htmlFor="contained-button-file">
                  <Button variant="contained" color="default" component="span">
                  Sube tu Archivo
                  </Button>
                  </label>
                  <input  className={classes.input} id="icon-button-file" type="file" onChange={handleChangeFile} />
                  <label htmlFor="icon-button-file">
                  <IconButton color="default" aria-label="upload picture" component="span">
                  <FileCopyIcon />
                  </IconButton>
                  </label>
                  <Button
                    type="submit"
                    fullWidth
                    variant="outlined"
                    color="default"
                    aling="center"
                  >Enviar</Button>
                </form>
              </Grid>
            </Fragment>

          )
      }

    </React.Fragment >
  );
}


