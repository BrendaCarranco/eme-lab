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
import TableContainer from '@material-ui/core/TableContainer'
import Paper from '@material-ui/core/Paper'
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

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];
  

const Prices = () => {

    const [allPrices, setAllPrices] = useState([]);

    const [edit, setEdit] = useState([])
    
    useEffect(() => {
        fetchUsuarios();
    }, []);

    const fetchUsuarios = async () => {
        try {
            const res = await firebase.firestore().collection('prueba').get();
            const arrayData = await res.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setAllPrices(arrayData);
            const a = allPrices.map(a=> a.impresion)
            setEdit(a)




            //console.log(allPrices.Volumen)

            
            
        } catch (error) {
            console.log(error);
        }
    };

    console.log(allPrices);


    const volumen = allPrices.Volumen


    const classes = useStyles();
    
    
    return (
        <div>
            <Container maxWidth="lg" className={classes.container}>
                <Grid item xs={12} md={12} lg={12}>

                    <div className={classes.paper}>
                        <Typography component="h1" variant="h5">
                            Precios 
                        
        </Typography>
        
<div>


<Typography component="h1" variant="h5">
                            Precios 
                        
zzzz</Typography>
<TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Medida</TableCell>
            <TableCell align="right">Precio</TableCell>
          </TableRow>
        </TableHead>
            {
                allPrices.map(a=> (
                    <TableBody key={a.id}>
                        {
                            a.impresion.map(b => (
                                <TableRow key={b.medida}>
                                <TableCell component="th" scope="row">{b.medida} cm</TableCell>
                            <TableCell component="th" scope="row">${b.precio}</TableCell>
                        
                            </TableRow>
                            ))
                        }
                
                    </TableBody>

                ))
            }
      </Table>
    </TableContainer>
  );
}



</div>



                    </div>
                    <Box mt={5}>
                    </Box>
                </Grid>

            </Container>
        </div>
    );
};

export default Prices;



 {/*    {
        allPrices.map(vol => (
            <div>
        <p>{vol.id}</p>
        {
            vol.impresion.map(a => (
            <p>{a.precio} {a.medida}</p>
            ))
        }
        
            <div>
                }
            </div>
            </div>

        ))
    } */}