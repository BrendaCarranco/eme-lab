import React from 'react';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120
    },
    selectEmpty: {
        marginTop: theme.spacing(2)
    }
}));

const BtnStatus = ({ usersFiles }) => {


    const classes = useStyles();
    const [status, setStatus] = React.useState("");

    const handleChange = (event) => {
        setStatus(event.target.value);
    };

    return (
        <div>
            <div>
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="demo-simple-select-outlined-label">Status</InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        //value={status}
                        onChange={handleChange}
                    //label="status"
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={'Pendiente'}>Pendiente</MenuItem>
                        <MenuItem value={'Finalizado'}>Finalizado</MenuItem>
                    </Select>
                </FormControl>
            </div>
        </div>
    );
};

export default BtnStatus;
