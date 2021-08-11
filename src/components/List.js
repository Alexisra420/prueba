import React, {Fragment} from 'react';


function List ({ciudadData}) {

    return(
        <Fragment>
        <ul>
            {ciudadData.map((ciudad, index) => {
                return (
                <li key={index}>
                    {ciudad}
                </li>
                ); 
            })}
        </ul>
        </Fragment>
    );
}

export default List;