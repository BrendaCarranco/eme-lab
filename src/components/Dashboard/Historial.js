import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { firebase } from '../../firebase';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Historial({ setUsersFiles, usersFiles, fbMail }) {
  const classes = useStyles();
  //const [usersFiles, setUsersFiles] = useState([]);

  useEffect(() => {
    const fetchUsersFiles = async () => {
      const usersFilesCollection = await firebase
        .firestore()
        .collection('files')
        .where("email", "==", fbMail)
        .get();
      setUsersFiles(usersFilesCollection.docs.map(doc => {
        return doc.data();
      }));
    };
    fetchUsersFiles();
  }, [setUsersFiles, fbMail]);

  return (
    <React.Fragment>
      <Title>Historial de Cotizaciones</Title>
      <table className='black-text'>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Fecha</th>
          </tr>
        </thead>
        <tbody>
          {
            usersFiles.map(item => (
              <tr key={item.id}>

                <td>{item.name}</td>
                <td>{item.date}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </React.Fragment>

  );
}