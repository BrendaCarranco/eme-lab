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
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import IconButton from '@material-ui/core/IconButton';


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
        <div>
            <Fragment>
                <Table className='black-text'>
                    <TableHead>
                        <TableRow>
                            <TableCell>Usuario</TableCell>
                            <TableCell>Fecha</TableCell>
                            <TableCell>Nombre</TableCell>
                            <TableCell>Archivo</TableCell>
                            <TableCell>Status</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>


                        {
                            allCot.map(item => (
                                <Fragment>
                                    <TableRow key={item.id}>
                                        <TableCell>
                                            <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)} key={item.id} >
                                                {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                                            </IconButton>
                                        </TableCell>
                                        <TableCell>{item.user}</TableCell>
                                        <TableCell>{moment(item.date).format('LLL')}</TableCell>
                                        <TableCell>{item.extra}</TableCell>
                                        <TableCell><Link color="inherit" href={item.fileLink} target="_blank" onClick={() => updateStatus(item.id)} >Descargar</Link></TableCell>
                                        <TableCell>{item.status}</TableCell>
                                    </TableRow>


                                    <TableRow>
                                        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                                            <Collapse in={open} timeout="auto" unmountOnExit key={item.id}>
                                                <Box margin={1}>
                                                    <Typography variant="h6" gutterBottom component="div">
                                                        History ola
                                                </Typography>

                                                </Box>
                                            </Collapse>
                                        </TableCell>
                                    </TableRow>
                                </Fragment>
                            ))
                        }
                    </TableBody>
                </Table>
            </Fragment>
        </div>
    );
};

export default HistorialAdmin;















/* import React, { Fragment, useEffect, useState } from 'react';
import { firebase } from '../../firebase';

import moment from 'moment';
import 'moment/locale/es';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import IconButton from '@material-ui/core/IconButton';


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
        <div>
            <Fragment>
                <Table className='black-text'>
                    <TableHead>
                        <TableRow>
                            <TableCell>Usuario</TableCell>
                            <TableCell>Fecha</TableCell>
                            <TableCell>Nombre</TableCell>
                            <TableCell>Archivo</TableCell>
                            <TableCell>Status</TableCell>

                        </TableRow>

                    </TableHead>
                    <TableBody>
                        {
                            allCot.map(item => (
                                <Fragment>
                                    <TableRow key={item.id}>
                                        <TableCell>
                                            <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                                                {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                                            </IconButton>
                                        </TableCell>
                                        <TableCell>{item.user}</TableCell>
                                        <TableCell>{moment(item.date).format('LLL')}</TableCell>
                                        <TableCell>{item.extra}</TableCell>
                                        <TableCell><Link color="inherit" href={item.fileLink} target="_blank" onClick={() => updateStatus(item.id)} >Descargar</Link></TableCell>
                                        <TableCell>{item.status}</TableCell>
                                    </TableRow>


                                    <TableRow>
                                        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                                            <Collapse in={open} timeout="auto" unmountOnExit>
                                                <Box margin={1}>
                                                    <Typography variant="h6" gutterBottom component="div">
                                                        History ola
                                                </Typography>

                                                </Box>
                                            </Collapse>
                                        </TableCell>
                                    </TableRow>
                                </Fragment>
                            ))
                        }
                    </TableBody>
                </Table>
            </Fragment>
        </div>
    );
};

export default HistorialAdmin; */
