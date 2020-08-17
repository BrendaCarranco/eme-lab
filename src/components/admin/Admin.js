import React, { useState, useEffect } from 'react';
import { firebase } from '../../firebase';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import CardMedia from '@material-ui/core/CardMedia';
import ListAltIcon from '@material-ui/icons/ListAlt';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Link from '@material-ui/core/Link';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import logoeme from '../../img/logoeme.png';
import Registro from './Registro';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    grow: {
        flexGrow: 1,
    }, formControl: {
        margin: theme.spacing(1),
        minWidth: 120
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    logo: {
        height: '3%',
        width: '8%',
    },
    fixedHeight: {
        height: 600,
    },
}));

const Admin = ({ history }) => {
    const classes = useStyles();
    const [open, setOpen] = useState(true);
    const [cot, setCot] = useState(true);
    const [newHistory, setNewHistory] = useState(false);
    const [register, setRegister] = useState(false);
    const [allCot, setAllCot] = useState([]); //

    const logOut = () => {
        firebase.auth().signOut()
            .then(() => {
                history.push('/SignIn');
            });
    };

    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleCot = () => {
        setCot(true);
        setNewHistory(false);
        setRegister(false);
    };

    const handleHistory = () => {
        setNewHistory(true);
        setCot(false);
        setRegister(false);
    };

    const handleRegister = () => {
        setRegister(true);
        setCot(false);
        setNewHistory(false);
    };

    useEffect(() => {
        const fetchUsersFiles = async () => {
            const usersFilesCollection = await firebase
                .firestore()
                .collection('files')
                .get();
            setAllCot(usersFilesCollection.docs.map(doc => {
                return doc.data();
            }));
        };
        fetchUsersFiles();
    }, [setAllCot]);

    //console.log(allCot);

    const [status, setStatus] = React.useState("");

    const handleChange = (event) => {
        setStatus(event.target.value);
    };


    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar color="default" position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <CardMedia
                        title="logo"
                        image={logoeme}
                        className={classes.logo}
                        component="img"
                        noWrap
                    />
                    <div className={classes.grow} />
                    <IconButton color="inherit">
                        <Badge badgeContent={4} color="secondary">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                    <IconButton color="inherit" edge="end" onClick={() => logOut()}>
                        <Badge color="secondary">
                            <ExitToAppIcon />
                        </Badge>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                classes={{
                    paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                }}
                open={open}
            >
                <div className={classes.toolbarIcon}>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <List>
                    <ListItem>
                        <ListItemIcon>
                            <AccountBoxIcon />
                        </ListItemIcon>
                        <Typography variant="h6" color="initial">
                            Administrador
                        </Typography>
                    </ListItem>
                </List>
                <Divider />

                <ListItem button onClick={handleCot} >
                    <ListItemIcon>
                        <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary="Cotizaciones" />
                </ListItem>

                <ListItem button onClick={handleHistory}>
                    <ListItemIcon>
                        <ListAltIcon />
                    </ListItemIcon>
                    <ListItemText primary="Historial" />
                </ListItem>


                <ListItem button onClick={handleRegister}>
                    <ListItemIcon>
                        <ListAltIcon />
                    </ListItemIcon>
                    <ListItemText primary="Registro" />
                </ListItem>

                <Divider />
            </Drawer>

            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={12} lg={12}>
                            <Paper className={fixedHeightPaper}>
                                {
                                    cot ? (
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
                                                        <TableRow key={item.id}>

                                                            <TableCell>{item.user}</TableCell>
                                                            <TableCell>{item.date}</TableCell>
                                                            <TableCell>{item.name}</TableCell>
                                                            <TableCell><Link color="inherit" href={item.fileLink} >Descargar</Link></TableCell>
                                                            <TableCell> <FormControl variant="outlined" className={classes.formControl}>
                                                                <InputLabel id="demo-simple-select-outlined-label">Status</InputLabel>
                                                                <Select
                                                                    labelId="demo-simple-select-outlined-label"
                                                                    id="demo-simple-select-outlined"
                                                                    value={item.status}
                                                                    onChange={handleChange}
                                                                //label="status"
                                                                >
                                                                    <MenuItem value="">
                                                                        <em>None</em>
                                                                    </MenuItem>
                                                                    <MenuItem value={'Pendiente'}>Pendiente</MenuItem>
                                                                    <MenuItem value={'Finalizado'}>Finalizado</MenuItem>
                                                                </Select>
                                                            </FormControl></TableCell>
                                                        </TableRow>
                                                    ))
                                                }
                                            </TableBody>
                                        </Table>
                                    ) : (null)
                                }
                                {
                                    register ? (<Registro />) : (null)
                                }
                            </Paper>
                        </Grid>
                    </Grid>
                    <Box pt={4}>
                    </Box>
                </Container>
            </main>
        </div>
    );
};

export default Admin;
