import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
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
import {ThemeProvider} from '@material-ui/core/styles'
import theme from '../../temaConfig';

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
    height: '145px',
    width: '245px',
    paddingTop:'40px',
    paddingLeft:'20px',
  },
  button: {
    paddingTop:'100px',
    fontSize: '23px',
    textTransform: 'none',
  },
  toolbar: {
  
    height: '180px',
  
  },
  grow: {
    flexGrow: 1,
  },
}));



export default function Landing() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="sticky" className={classes.toolbar} color="inherent" elevation={0}>
        <Toolbar>
        <CardMedia
            title="logo"
            image={logoeme}
            className={classes.logo}
            component="img"
            noWrap
            
          />
          <div className={classes.grow} />
          <Button className={classes.button} variant="text" size="large">
            Nosotros
          </Button>
          <Button className={classes.button} variant="text" size="large">
            Servicios
        </Button>
        <Button className={classes.button} variant="text" size="large"> 
            Membresías
        </Button>
       
          <Button className={classes.button} variant="text" size="large">
            Cotiza tu proyecto
            </Button>
          <Button className={classes.button} variant="text" size="large">
            Contacto
            </Button>
            <Button className={classes.button} variant="text" size="large">
            Cuenta
            </Button>
        </Toolbar>
      </AppBar>
      <Box 
      border={1}
      m={4}
      p={40}
      bgcolor="inherent">

      </Box>
      <div>
          <Grid container spacing={3}>
              <Grid item xs>
              <Box 
               border={0}
               m={5}
               p={2}
               width={1/2}
               left></Box>
              <Box m={5} width={1/2} flexDirection="row-reverse" display="flex" alignSelf="flex-end">
              <Typography component="div" color="initial" variant="body1">
                    <Box fontSize={35} lineHeight="normal" textAlign="right">
                    Somos un espacio dedicado a la fotografía, el arte,
                    la conservación y la reproducción de la imagen por
                    medios digitales y análogos.
                    </Box>
                    <Box p={2}></Box>
                    <Box fontSize={35} lineHeight="normal" textAlign="right">
                    Contamos con un sistema de edición e impresión
                    de última generación.<br/>
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
                    <Box fontSize={35} lineHeight="normal" textAlign="right"> 
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
                   <Box fontSize="h4.fontSize">
                   Digitalización
                   </Box>
                   <Box fontSize="h4.fontSize">
                   Revelado
                   </Box>
                   <Box fontSize="h4.fontSize">
                   Impresión
                   </Box>
                   <Box fontSize="h4.fontSize" lineHeight="normal">
                   Conservación y restauracion<br/>
                   de fotografías y documentos
                   </Box>
                   <Box fontSize="h4.fontSize" lineHeight="normal">
                   Digitalización de materiales<br/>
                   fotográficos y obras de arte
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
                   <Box fontSize="h4.fontSize">
                   Digitalización
                   </Box>
                   <Box p={3}></Box>
                   <Box fontSize="h4.fontSize" lineHeight="normal">
                   Digitalización de negativos con<br/>
                  sensor CMOS Full Frame de 50.6 megapixeles
                   </Box>
                   <Box fontSize="h4.fontSize">
                   Cama plana Epson V850 Pro
                   </Box>
                  
                    

               </Box>
            </Grid>
            <Grid item xs={6}> 
              <Box 
               border={1}
               m={10}
               p={20}
               mt={40}></Box>
            </Grid>
            <Grid item xs={6}> 
              <Box 
               m={10}
               >
                   <Box fontSize="h4.fontSize">
                   Revelado
                   </Box>
                   <Box p={3}></Box>
                   <Box fontSize="h4.fontSize" lineHeight="normal">
                   Blanco y Negro
                   </Box>
                   <Box fontSize="h4.fontSize">
                   Color
                   </Box>
                  
                    

               </Box>
            </Grid>
            <Grid item xs={6}> 
              <Box 
               border={1}
               m={10}
               p={20}
               mt={40}></Box>
            </Grid>
            <Grid item xs={6}> 
              <Box 
               m={10}
               >
                   <Box fontSize="h4.fontSize">
                   Impresión
                   </Box>
                   <Box p={3}></Box>
                   <Box fontSize="h4.fontSize" lineHeight="normal">
                   Impresión digital con inyección<br/>
                    de tintas EPSON Ultrachrome HDX
                   </Box>
                   
                  
                    

               </Box>
            </Grid>
            <Grid item xs={6}> 
              <Box 
               border={1}
               m={10}
               p={20}
               mt={40}></Box>
            </Grid>
            <Grid item xs={6}> 
              <Box 
               m={10}
            >
                   <Box fontSize="h4.fontSize" lineHeight="normal">
                   Conservación y restauracion
de fotografías y documentos
                   </Box>
                   <Box p={3}></Box>
                   <Box fontSize="h4.fontSize" lineHeight="normal">
                   Estabilización y consolidación de emulsiones
                    </Box>
                   <Box fontSize="h4.fontSize" lineHeight="normal">
                   Limpieza de obras
                   </Box>
                   <Box fontSize="h4.fontSize" lineHeight="normal">
                   Tratamientos para la detención de la degradación
                   </Box>
                   <Box fontSize="h4.fontSize" lineHeight="normal">
                   Restauración de marcos y sistemas de montaje
                   </Box>
                   <Box fontSize="h4.fontSize" lineHeight="normal">
                   Creación de embalajes de protección especiales
                   </Box>
                   <Box fontSize="h4.fontSize" lineHeight="normal">
                   Producción e facsímiles para exposición
                   </Box>
                   <Box fontSize="h4.fontSize" lineHeight="normal">
                   Montajes para exposición siguiendo normas de durabilidad y conservación museográfica
                   </Box>
                   <Box p={10}>

                   </Box>
                   <Box fontSize="h4.fontSize" lineHeight="normal">
                   Digitalización de materiales<br/>
                    fotográficos y obras de arte
                   </Box>
                   <Box p={3}></Box>
                   <Box fontSize="h4.fontSize" lineHeight="normal">
                   Las fotografías, inevitablemente, se deterioran con el paso del tiempo.<br/>
                    Al digitalizar una obra, aseguramos la posibilidad de<br/> poder apreciar
                      y estudiar esta pieza, aún cuando el<br/> original sufra deterioros o pérdidas.
                    </Box>
                    <Box p={3}></Box>
                   <Box fontSize="h4.fontSize" lineHeight="normal">
                   Acondicionamiento, limpieza y preparación de piezas<br/> para digitalización.<br/>
                    Digitalización y Reproducción de obras de arte<br/>
                    Inserción de metadatos y catalogación.
                   </Box>
                  
                   
                   
                   
                    

               </Box>
            </Grid>
            <Grid item xs={6}> 
              <Box 
               border={1}
               m={10}
              height="1400px"
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
    </ThemeProvider>
  );
}