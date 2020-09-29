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


const HistorialAdmin = () => {

    const [allCot, setAllCot] = useState([]);

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
                    order: item.order,
                    finalTotal: item.finalTotal,
                    date: item.date,
                    dateFormat: item.dateFormat,
                    email: item.email,
                    user: item.user,
                    status: 'Revisado',
                    folio: item.folio
                } : item
            ));
            setAllCot(editedArray);

        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div>
            <div class="clearfix"></div>
            <br /><br />
            <div>
                <div class="panel panel-default">
                    <div class="panel-heading">Option 2 - Collapsible Table Structure</div>
                    <Table class="table table-responsive table-hover">
                        <TableHead>
                            <TableRow>
                                <TableCell>Folio</TableCell>
                                <TableCell>Nombre</TableCell>
                                <TableCell>Status</TableCell>
                                <TableCell>Fecha</TableCell>
                                <TableCell>Total</TableCell>
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
                                            <TableCell> {moment(cot.date).format('L')}</TableCell>
                                            <TableCell>$ {cot.finalTotal} MXN</TableCell>
                                        </TableRow>

                                        <TableRow class={`collapse table${index}`}>
                                            <TableCell colspan="999">
                                                <div>


                                                    <Table class="table table-striped">
                                                        <TableHead>
                                                            <TableRow>
                                                                <TableCell>Papel</TableCell>
                                                                <TableCell>Tamaño</TableCell>
                                                                <TableCell>Cantidad</TableCell>
                                                                <TableCell>Archivo</TableCell>
                                                            </TableRow>
                                                        </TableHead>
                                                        {
                                                            cot.order.map(order => (
                                                                <TableBody>
                                                                    <TableRow>
                                                                        <TableCell>{order.paper}</TableCell>
                                                                        <TableCell>{order.size}</TableCell>
                                                                        <TableCell>{order.quantity}</TableCell>
                                                                        <TableCell><Link color="inherit" href={order.file} target="_blank" onClick={() => updateStatus(cot.id)}>Descargar</Link></TableCell>
                                                                    </TableRow>
                                                                </TableBody>
                                                            ))
                                                        }
                                                    </Table>

                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    </Fragment>
                                ))
                            }

                        </TableBody>

                    </Table>
                </div>
            </div>
        </div>
    );
};

export default HistorialAdmin;









































