import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { firebase } from '../../firebase';

import moment from 'moment';
import 'moment/locale/es';

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
        .orderBy("date")
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
            <TableCell>Folio</TableCell>
            <TableCell>Fecha</TableCell>
            <TableCell>Cotización</TableCell>
            <TableCell>Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            usersFiles.map(item => (
              <TableRow >
                <TableCell>{item.folio}</TableCell>
                <TableCell> {moment(item.date).format('L')} </TableCell>
                <TableCell>{item.paper}, {item.size}cm</TableCell>
                <TableCell>${item.total} MXN</TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </React.Fragment>

  );
}