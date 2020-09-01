import React, { useEffect } from 'react';
import { firebase } from '../../firebase';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});



export default function Precio({ setPrecios, getPrecios, precio }) {
  const classes = useStyles();

  useEffect(() => {
    const fetchGetPrecios = async () => {
      const getPreciosPapel = await firebase
        .firestore()
        .collection('precios')
        .where("cien", "==", precio)
        .get();
      setPrecios(getPreciosPapel.docs.map(doc => {
        return doc.data();
      }));
    };
    fetchGetPrecios();
  }, [setPrecios, precio]);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Medidas de Papel</TableCell>
            <TableCell align="right">Hahnemhüle Bamboo  290 g.</TableCell>
            <TableCell align="right">Hahnemühle Rice Paper 100 g.</TableCell>
            <TableCell align="right">Hahnemühle Photo Matt Fibre 200g.</TableCell>
            <TableCell align="right">Hahnemühle Photo Silk Baryta 310 g.</TableCell>
            <TableCell align="right">EPSON Pap. Enhanced Mate</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {
            getPrecios.map(item => (
              <TableRow>

                <TableCell>{item.bamboo}</TableCell>
                <TableCell>{item.epson}</TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
}