import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import logoeme from '../../img/logoeme.png';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Eme-Lab
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  logo: {
    height: '90px',
    width: '160px',
    paddingTop:'15px',
  },
  toolbar: {
  
    height: '120px',
  },
  grow: {
    flexGrow: 1,
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Landing() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative" className={classes.toolbar} color="inherent">
        <Toolbar>
        <CardMedia
            title="logo"
            image={logoeme}
            className={classes.logo}
            component="img"
            noWrap
            
          />
          <div className={classes.grow} />
          <Button>
            Nosotros
          </Button>
          <Button>
            Servicios
        </Button>
        <Button>
            Membresías
        </Button>
       
          <Button>
            Cotiza tu proyecto
            </Button>
          <Button>
            Contacto
            </Button>
        </Toolbar>
      </AppBar>
      <Box 
      border={1}
      m={4}
      p={40}>

      </Box>
      <div>
          <Grid container spacing={3}>
              <Grid item xs>
              <Box 
               border={0}
               m={5}
               p={2}
               width={1/2}
               left>
                  <Typography component="div" color="initial" variant="body1">
                    <Box fontSize={30}>
                    Somos un espacio dedicado a la fotografía, el arte,
                    la conservación y la reproducción de la imagen por
                    medios digitales y análogos.
                    </Box>
                    <Box fontSize={30}>
                    Contamos con un sistema de edición e impresión
                    de última generación.
                    Ofrecemos una amplia gama de papeles para
                    impresión, así como con un laboratorio equipado para
                    revelado de película blanco y negro y color, en distintos
                    formatos, en donde el fotógrafo profesional o amateur
                    puede participar en cualquier etapa del proceso.
                    Nuestro equipo de postproducción cuenta con mas
                    de 10 años de experiencia.
                    </Box>
                    <Box m={10}
                        p={5}>

                    </Box>
                    <Box fontSize={30}>
                    Ofrecemos servicios de conservación y restauración,
                    avalados por mas de 20 años de experiencia en el oficio.
                    Trabajamos con sistemas de almacenaje y servicios
                    de enmarcado de calidad museográfica.
                    </Box>
                  </Typography>
                </Box>
              </Grid>           
          </Grid>
        <Grid container spacing={2}>
          <Grid item xs={6}> 
              <Box 
               m={10}
               >
                   <Box fontSize="h3.fontSize">
                   Digitalización
                   </Box>
                   <Box fontSize="h5.fontSize">
                   Digitalización de negativos con
                    sensor CMOS Full Frame de 50.6 megapixeles
                    </Box>
                    <Box fontSize="h5.fontSize">
                    Cama plana Epson V850 Pro
                   </Box>
                   <Box fontSize="h3.fontSize">
                   Revelado
                   </Box>
                   <Box fontSize="h5.fontSize">
                   Blanco y Negro
                    </Box>
                    <Box fontSize="h5.fontSize">
                    Color
                   </Box>
                   <Box fontSize="h3.fontSize">
                   Impresión
                   </Box>
                   <Box fontSize="h5.fontSize">
                   Impresión digital con inyección
                   de tintas EPSON Ultrachrome HDX
                    </Box>
                    

               </Box>
            </Grid>
            <Grid item xs={6}> 
              <Box 
               border={1}
               m={10}
               p={20}></Box>
            </Grid>
            <Grid item xs={6}> 
              <Box 
               m={10}
            >
                   <Box fontSize="h3.fontSize">
                   Conservación y restauracion
de fotografías y documentos
                   </Box>
                   <Box fontSize="h5.fontSize">
                   Estabilización y consolidación de emulsiones
                    </Box>
                   <Box fontSize="h5.fontSize">
                   Limpieza de obras
                   </Box>
                   <Box fontSize="h5.fontSize">
                   Tratamientos para la detención de la degradación
                   </Box>
                   <Box fontSize="h5.fontSize">
                   Restauración de marcos y sistemas de montaje
                   </Box>
                   <Box fontSize="h5.fontSize">
                   Creación de embalajes de protección especiales
                   </Box>
                   <Box fontSize="h5.fontSize">
                   Producción e facsímiles para exposición
                   </Box>
                   <Box fontSize="h5.fontSize">
                   Montajes para exposición siguiendo normas de durabilidad y conservación museográfica
                   </Box>
                   <Box p={10}>

                   </Box>
                   <Box fontSize="h3.fontSize">
                   Digitalización de materiales
fotográficos y obras de arte
                   </Box>
                   <Box fontSize="h5.fontSize">
                   Las fotografías, inevitablemente, se deterioran con el paso del tiempo.
Al digitalizar una obra, aseguramos la posibilidad de poder apreciar
y estudiar esta pieza, aún cuando el original sufra deterioros o pérdidas.
                    </Box>
                   <Box fontSize="h5.fontSize">
                   Acondicionamiento, limpieza y preparación de piezas para digitalización
Digitalización y Reproducción de obras de arte
Inserción de metadatos y catalogación
                   </Box>
                  
                   
                   
                   
                    

               </Box>
            </Grid>
            <Grid item xs={6}> 
              <Box 
               border={1}
               m={10}
              height="1000px"
               width="80%"></Box>
            </Grid>
            
        </Grid>
      </div>
   
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}