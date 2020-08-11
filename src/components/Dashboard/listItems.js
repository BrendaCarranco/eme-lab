import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import DashboardIcon from '@material-ui/icons/Dashboard';
import ListAltIcon from '@material-ui/icons/ListAlt';
import LayersIcon from '@material-ui/icons/Layers';


export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Nueva Cotización" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ListAltIcon />
      </ListItemIcon>
      <ListItemText primary="Historial" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Membresías" />
    </ListItem>
  </div>
);
