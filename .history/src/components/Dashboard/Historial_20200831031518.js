import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { firebase } from '../../firebase';
import Title from './Title';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
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
      <Table className='black-text'>
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell>Fecha</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            usersFiles.map(item => (
              <TableRow key={item.id}>

                <TableCell>{item.name}</TableCell>
                <TableCell>{item.date}</TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </React.Fragment>

  );
}