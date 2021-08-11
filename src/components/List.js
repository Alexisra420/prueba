import React, {Fragment} from 'react';


function List ({ciudata}) {

    return(
        <Fragment>
        <h1>LISTA DE CIUDADES DISPONIBLES</h1>
        <ul>
            {ciudata.map((ciudad, index) => {
                return <li key={index}>{ciudad}</li> 
            })}
        </ul>
        </Fragment>
    );
}

export default List;