import React, { useState } from 'react';
import { firebase } from '../../firebase';
import moment from 'moment';
import 'moment/locale/es';

import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));



const Cotizacion = ({ firebaseUser, setUsersFiles, usersFiles }) => {
  const [fileUrl, setFileUrl] = useState(null);
  const [input, setInput] = useState('');
  //const [usersFiles, setUsersFiles] = useState([]);

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

  /*   const emailUpdate = async () => {
      const a = await firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
          setUserEmail(user.email);
          return;
          // User is signed in.
        } else {
          return;
        }
      });
    };
    emailUpdate();
  
    useEffect(() => {
      const fetchUsersFiles = async () => {
        const usersFilesCollection = await firebase.firestore().collection('files').where("email", "==", userEmail).get();
        setUsersFiles(usersFilesCollection.docs.map(doc => {
          return doc.data();
        }));
      };
      fetchUsersFiles();
    }, [setUsersFiles, userEmail]);
  
    console.log(usersFiles); */


  return (
    <React.Fragment>
      <Title>Nueva Cotización</Title>
      <Container maxWidth="xs">
        <Typography variant="h6" color="initial">
          Llena el siguiente formulario para poder realizar tu cotización
       </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="outlined-basic"
            label="Nombre"
            name='username'
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
      </Container>
    </React.Fragment>


  );
};

export default Cotizacion;

