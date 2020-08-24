import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { firebase } from '../../firebase';


function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Historialadmin({ setUsersFiles, usersFiles }) {
  const classes = useStyles();
  //const [usersFiles, setUsersFiles] = useState([]);
  const [userEmail, setUserEmail] = useState('');

  const emailUpdate = async () => {
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
      const usersFilesCollection = await firebase
        .firestore()
        .collection('files')
        .where("email", "==", userEmail)
        .get();
      setUsersFiles(usersFilesCollection.docs.map(doc => {
        return doc.data();
      }));
    };
    fetchUsersFiles();
  }, [setUsersFiles, userEmail]);

  return (
    <React.Fragment>
      
      <h1>Historial Admin</h1>
    </React.Fragment>

  );
}