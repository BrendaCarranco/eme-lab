import React, { useState, useEffect } from 'react';
import { firebase } from '../../firebase';
import { withRouter } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { firestore, functions } from 'firebase';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    logo: {
        height: '150px',
        width: '320px'

    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const ModalRegister = ({ setRegister, history }) => {
    const classes = useStyles();

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsuarios();
    }, []);

    const fetchUsuarios = async () => {
        try {
            const res = await firebase.firestore().collection('usuarios').get();
            const arrayUsers = res.docs.map(doc => doc.data());
            setUsers(arrayUsers);
        } catch (error) {
            console.log(error);
        }
    };
    /* 
        const makeAdmin = email => {
            console.log('admiiiiin', email);
            const addRole = firebase.functions().httpsCallable('addNewAdmin');
            addRole({ email: email })
                .then(res => {
                    console.log(res);
                    if (res.data.error) {
                        console.log('no tiene permisos');
                        return;
                    }
                    firebase.firestore().collection('usuarios').doc(email).update({ role: 'Admin' })
                        .then(user => {
                            console.log('usuario modificado a administrador');
                            fetchUsuarios();
                        });
                });
        };*/

    const makeMember = email => {
        const addRole = firebase.functions().httpsCallable('createMember');
        addRole({ email: email })
            .then(res => {
                console.log(res);
                if (res.data.error) {
                    console.log('no tiene permisos');
                    return;
                }
                firebase.firestore().collection('usuarios').doc(email).update({ role: 'Miembro' })
                    .then(user => {
                        console.log('usuario modificado a miembro');
                        fetchUsuarios();
                    });

            });
    };

    const deleteMember = email => {
        const addRole = firebase.functions().httpsCallable('deleteMember');
        addRole({ email: email })
            .then(res => {
                console.log(res);
                if (res.data.error) {
                    console.log('no tiene permisos');
                    return;
                }
                firebase.firestore().collection('usuarios').doc(email).update({ role: 'Invitado' })
                    .then(user => {
                        console.log('usuario modificado a Invitado');
                        fetchUsuarios();
                    });

            });
    };

    return (
        <div>
            <Container maxWidth="lg" className={classes.container}>
                <Grid item xs={12} md={12} lg={12}>

                    <div className={classes.paper}>
                        <Typography component="h1" variant="h5">
                            Miembros
        </Typography>
                        <Table className='black-text'>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Nombre</TableCell>
                                    <TableCell>Correo</TableCell>
                                    <TableCell>Status</TableCell>
                                    <TableCell>Actualizar</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    users.map(user => (
                                        <TableRow key={user.uid}>

                                            <TableCell>{user.displayName}</TableCell>
                                            <TableCell>{user.email}</TableCell>
                                            <TableCell>{user.role}</TableCell>
                                            <TableCell>
                                                {
                                                    user.role === 'Invitado' && <Button
                                                        type='text'
                                                        variant="outlined"
                                                        color="default"
                                                        className={classes.submit}
                                                        onClick={() => makeMember(user.email)}
                                                    >Miembro</Button>}
                                                {/*           <Button onClick={() => makeAdmin(user.email)}>
                                                    Hacer admin
                                                    </Button> */}
                                                {
                                                    user.role === 'Miembro' && <Button
                                                        type='text'
                                                        variant="outlined"
                                                        color="default"
                                                        className={classes.submit}
                                                        onClick={() => deleteMember(user.email)}
                                                    >Invitado</Button>
                                                }

                                            </TableCell>


                                        </TableRow>
                                    ))
                                }
                            </TableBody>
                        </Table>


                    </div>
                    <Box mt={5}>
                    </Box>
                </Grid>

            </Container>
        </div>
    );
};

export default withRouter(ModalRegister);