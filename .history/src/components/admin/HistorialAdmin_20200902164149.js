import React, { Fragment, useEffect, useState } from 'react';
import { firebase } from '../../firebase';

import moment from 'moment';
import 'moment/locale/es';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import IconButton from '@material-ui/core/IconButton';

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

const HistorialAdmin = () => {

    const [allCot, setAllCot] = useState([]); //
    const [open, setOpen] = React.useState(false);



    useEffect(() => {
        const fetchUsersFiles = async () => {
            try {

                const db = firebase.firestore();
                const usersFilesCollection = await db.collection('files').orderBy('date').get();
                const arrayData = await usersFilesCollection.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                //console.log(arrayData);
                setAllCot(arrayData);

            } catch (err) {
                console.log(err);
            }
        };
        fetchUsersFiles();
    }, [setAllCot]);

    const updateStatus = async (id) => {
        try {
            const db = firebase.firestore();
            await db.collection('files').doc(id).update({
                status: 'Revisado'
            });

            const editedArray = allCot.map(item => (
                item.id === id ? {
                    id: item.id,
                    date: item.date,
                    email: item.email,
                    fileLink: item.fileLink,
                    name: item.name,
                    status: 'Revisado',
                    user: item.user
                } : item
            ));
            setAllCot(editedArray);

        } catch (error) {
            console.log(error);
        }
    };
    return (
<React.Fragment>
            
                
            
    <Table>
    <TableHead>
        <TableRow>
            <StyledTableCell>Folio</StyledTableCell>
            <TableCell>Nombre</TableCell>
            <TableCell>Status</TableCell>
        </TableRow>
    </TableHead>
            <TableBody>
                            {
                                allCot.map((cot, index) => (
                                    <Fragment key={cot.id}>
                                        <TableRow data-toggle="collapse" id={`table${index}`} data-target={`.table${index}`}>
                                            <TableCell>{cot.folio} </TableCell>
                                            <TableCell>{cot.user}</TableCell>
                                            <TableCell>{cot.status}</TableCell>
                                        </TableRow>

                                        <TableRow class={`collapse table${index}`}>
                                            <TableCell colspan="999">
                                                <div>
                                                    <Table class="table table-striped">
                                                        <TableHead>
                                                            <TableRow>
                                                                <TableCell>Link</TableCell>
                                                                <TableCell>Extra</TableCell>
                                                            </TableRow>
                                                        </TableHead>
                                                        <TableBody>
                                                            <TableRow>
                                                                <TableCell><Link color="inherit" href={cot.fileLink} target="_blank" onClick={() => updateStatus(cot.id)} >Descargar</Link></TableCell>
                                                                <TableCell>{cot.extra}</TableCell>
                                                            </TableRow>
                                                        </TableBody>
                                                    </Table>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    </Fragment>
                                ))
                            }

                        </TableBody>

                    </Table>

                    </React.Fragment>

            









        
    );
};

export default HistorialAdmin;









































