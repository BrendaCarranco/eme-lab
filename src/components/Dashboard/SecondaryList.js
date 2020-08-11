import React from 'react'
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';


const SecondaryList = () => {
    return (
    <React.Fragment>
    <ListItem>
   <ListItemIcon>
   <AccountBoxIcon />
   </ListItemIcon>
   <ListItemText primary="Hola" />
   </ListItem>
   </React.Fragment>
    )
}

export default SecondaryList
