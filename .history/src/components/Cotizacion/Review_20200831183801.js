import React, { useEffect, useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import FileCopyIcon from '@material-ui/icons/FileCopy';

import { firebase } from '../../firebase';
import moment from 'moment';
import 'moment/locale/es';


import {UserContext} from '../../context/UserProvider'



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

  
  
  const [precio, setPrecio] = useState('');

  useEffect(() => {
    const fetchGetPrecios = async () => {
      const getPreciosCollection = await firebase
        .firestore()
        .collection('precios')
        .where("Bamboo", "==", 'precios')
        .get();
      setPrecio(getPreciosCollection.docs.map(doc => {
        return doc.data();
      }));
    };
    fetchGetPrecios();
  }, []);
  console.log(precio);



 
  
  
  const {paper} = useContext(UserContext);

  console.log(paper, 'paper review')

  const {size} = useContext(UserContext);

  console.log(size, 'size review')

  let time = Date.now();
  let timeFormat = moment(time).format('LLL');

  const handleChangeFile = async e => {
    const file = e.target.files[0];
    const storageRef = firebase.storage().ref('Cotizaciones').child(firebaseUser.email);
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    setFileUrl(await fileRef.getDownloadURL());
  };

  const handleSubmit = e => {
    e.preventDefault();
    //console.log('submit');

    const username = e.target.username.value;
    setInput(username);
    if (!username) {
      return;
    }

    const newUserFile = {
      name: username,
      fileLink: fileUrl,
      date: timeFormat,
      email: firebaseUser.email,
      user: firebaseUser.displayName,
      status: 'Pendiente'
    };
    //esta sube la imegen 
    firebase.firestore().collection('files').doc().set(newUserFile);
    setUsersFiles([
      ...usersFiles,
      { ...newUserFile }

    ]);
    setInput('');
    setFileUrl('');
    return alert('archivo subido');
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Papel Seleccionado
      </Typography>
      <List disablePadding>
        
          <ListItem className={classes.listItem} >
            <ListItemText />
            <Typography variant="body2">
             {paper}
            </Typography>
          </ListItem>
      
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
           Tamaño Seleccionado
          </Typography>
          {size}
         
         
          <Typography gutterBottom>

          </Typography>
        </Grid>
        <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
        <Typography variant="h6" gutterBottom className={classes.title}>
           Selecciona tu archivo
        </Typography>
        </Grid>
      <Grid item xs={12} sm={6}>
      
      <div>
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
        name='file'
        required
        onChange={handleChangeFile}
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" color="primary" component="span">
          Subir
        </Button>
      </label>
      <input className={classes.input} id="icon-button-file" type="file"  name='file' required onChange={handleChangeFile}/>
      <label htmlFor="icon-button-file">
        <IconButton color="primary" aria-label="upload picture" component="span">
          <FileCopyIcon />
        </IconButton>
      </label>
    </div>
    </Grid>
          <Button
            type="submit"
            fullWidth
            variant="outlined"
            color="default"
          >Enviar</Button>

          </Grid>
          </form>

          
        
      </Grid>
    </React.Fragment>
  );
}


