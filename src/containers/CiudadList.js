import React, {Component} from 'react';
import List from '../components/List';
import axios from 'axios';

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
        
        const {ciudadData} = this.state;
        return(
            <List ciudata={ciudadData} />
        );
    }
}

export default CiudadListContainer;