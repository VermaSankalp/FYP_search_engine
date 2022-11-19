import React from 'react';
import './DisplayResults.css';

const DisplayResults = (props) => {

    return (
        <div className='resultsDiv'>
            <pre>
                { JSON.stringify(props.solrConnector.response.response, null, 2) }
            </pre>
        </div>
    )
}

export default DisplayResults;