import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function PaperForm({ firebaseUser, setUsersFiles, usersFiles }) {
    const [fileUrl, setFileUrl] = useState(null);
    const [input, setInput] = useState('');
 
  
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
        Llena el formulario
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
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
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}