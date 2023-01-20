import React from 'react';
import './DisplayResults.css';

const DisplayResults = (props) => {

    return (
        <div className='resultsDiv'>
            {props.results.map(obj => {
                return (
                    <div className='resultsBox'>
                        <p>{obj.id}</p>
                        <p>{obj.title}</p>
                        <p>{obj.source}</p>
                        <p>{obj.sourceName}</p>
                        <p>{obj.releaseDate}</p>
                        {/* <p>{obj.content}</p> */}
                    </div>
                );
            })}
        </div>
    )
}

export default DisplayResults;