import {createMuiTheme} from '@material-ui/core/styles'
import NeueMontreal from '/home/manuel/Escritorio/Eme-lab/eme-lab/src/font/NeueMontreal-Regular.woff';

const neueMontreal = {
  fontFamily: 'NeueMontreal',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local('NeueMontreal'),
    local('NeueMontreal-Regular),
    url(${NeueMontreal}) format('woff')
  `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

const theme = createMuiTheme({
   
  });

export default theme;