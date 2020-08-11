import React, { useState, useEffect } from 'react';
import { firebase } from '../../firebase';
import moment from 'moment';
import 'moment/locale/es';

import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
 
});


const Cotizacion = ({ firebaseUser }) => {
  const [fileUrl, setFileUrl] = useState(null);
  const [usersFiles, setUsersFiles] = useState([]);

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
      console.log('submit');

      const username = e.target.username.value;
      if (!username) {
          return;
      }

      const newUserFile = {
          name: username,
          fileLink: fileUrl,
          date: timeFormat
      };
      //esta sube la imegen 
      firebase.firestore().collection('files').doc().set(newUserFile);
      setUsersFiles([
          ...usersFiles,
          { ...newUserFile }

      ]);
  };

  useEffect(() => {
      const fetchUsersFiles = async () => {
          const usersFilesCollection = await firebase.firestore().collection('files').get();
          setUsersFiles(usersFilesCollection.docs.map(doc => {
              return doc.data();
          }));
      };
      fetchUsersFiles();
  }, []);

  return (
    <React.Fragment>
     <Title>Nueva Cotización</Title>
     <Container maxWidth="xs">
       <Typography variant="h6" color="initial">
         Llena el siguiente formulario ṕara poder realizar su cotización
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


