import React, {useState} from 'react';
import './SearchBar.css';

const SearchBar = (props) => {
    const [solrSearchUrl, setSolrSearchUrl] = useState("http://localhost:8983/solr/fyp_documents/select");
    const [query, setQuery] = useState("russia");
    const [filter, setFilter] = useState("");
    const [fetchFields, setFetchFields] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        let searchParams = {
            solrSearchUrl: solrSearchUrl,
            query: query,
            filter: filter,
            fetchFields: fetchFields.split(" "),
            offset: 0,
            limit: 10
        }
        props.doSearch(searchParams);
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <p>
                    <h3>solrSearchUrl:</h3>
                    <input type="text" value={solrSearchUrl} 
                    onChange={e => {setSolrSearchUrl(e.target.value)}}/>
                </p>
                <p>
                    <h3>Query:</h3>
                    <input type="text" value={query} 
                    onChange={e => {setQuery(e.target.value)}}/>
                </p>
                <p>
                    <h3>Filter:</h3>
                    <input type="text" value={filter} 
                    onChange={e => {setFilter(e.target.value)}}/>
                </p>
                <p>
                    <h3>fetchFields:</h3>
                    <input type="text" value={fetchFields} 
                    onChange={e => {setFetchFields(e.target.value)}}/>
                </p>
                <button type='submit' className='submitButton'>
                    Search
                </button>
            </form>
        </div>
    )
}

export default SearchBar;