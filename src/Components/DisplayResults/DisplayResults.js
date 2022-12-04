import React from 'react';
import './DisplayResults.css';

const DisplayResults = (props) => {

    return (
        <div className='resultsDiv'>
            <pre>
                {props.solrConnector.response != null ? JSON.stringify(props.solrConnector.response.response, null, 2) : 
                    <p className='preSearchMessage'>Enter a query and press search</p> }
            </pre>
        </div>
    )
}

export default DisplayResults;