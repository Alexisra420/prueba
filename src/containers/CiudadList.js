import React, {Component} from 'react';
import List from '../components/List';
import axios from 'axios';
import {AppBar, Typography, Toolbar} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import { blueGrey } from '@material-ui/core/colors';

class CiudadListContainer extends Component{

    state = {
        ciudadData: []
    }

    componentDidMount(){
    axios.get('https://appsmx.com.mx/api/test/ciudad.php')
    .then(res =>{
       const ciudadData = res.data.data;
       console.log(res.data.data);
       this.setState({
           ciudadData
       })
    })
    .catch(error => {
        console.log(error)
    })
   }
    render() {
        const {classes} = this.props;
        const {ciudadData} = this.state;
        return(
            <>
            <AppBar className={classes.NavColor} position="static">
                <Toolbar variant="dense">
                    <Typography variant="h6" component="p">LISTA DE CIUDADES DISPONIBLES</Typography>
                </Toolbar>
            </AppBar>
            <List ciudadData={ciudadData} />
            </>
        );
    }
}

export default withStyles({
    NavColor:{
        backgroundColor: '#21C4FD'
    }
}) (CiudadListContainer);