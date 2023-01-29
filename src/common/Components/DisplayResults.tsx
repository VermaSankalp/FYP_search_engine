import React from 'react';

type DisplayResultsProps = {
    id : string;
    title: string;
    source: string;
    sourceName : string;
    releaseDate : string;
    content: string;
}

const DisplayResults = ({id, title, source, sourceName, releaseDate, content} : DisplayResultsProps) : JSX.Element => {

    return (
        <div className='ml-2 text-left font-source-sans-pro'>
            <div className='bg-[#f6f6f6]'>
                <p>{id}</p>
                <p>{title}</p>
                <p>{source}</p>
                <p>{sourceName}</p>
                <p>{releaseDate}</p>
                {/* <p>{content}</p> */}
            </div>
        </div>
    )
}

export default DisplayResults;