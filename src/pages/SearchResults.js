
import { useEffect, useState } from 'react'; 
import { useSearchParams } from 'react-router-dom';
import { InputField } from "../common/Components/InputField.tsx";
import { createSearchParams, useNavigate } from "react-router-dom";
import DisplayResults from "../common/Components/DisplayResults.tsx";
import axios from "axios";
import Axios from '../axios';
import UserInput from '../common/Components/userInput';

const SearchResults = () => {
    const [searchParams] = useSearchParams();
    const [query, setQuery] = useState(searchParams.get("query"));
    const [searchQuery, setSearchQuery] = useState(searchParams.get("query"));
    const [solrSearchUrl, setSolrSearchUrl] = useState("http://localhost:8983/solr/test_core/select");
    const [searchResults, setSearchResults] = useState([]); 

    const navigate = useNavigate();

    const navigateWithQuery = (query) => {
        navigate({
            pathname: "/search-results",
            search: createSearchParams({
                query: query
            }).toString()
        })
    }

    useEffect(() => {
        axios.get(solrSearchUrl, {
            params : {
                // "fl": props.fetchFields,
                "q": query,
                // "indent": true,
                // "q.op": "OR",
                "rows": 5
            }
        }).then(res => {
            console.log(res);
            setSearchResults(res.data.response.docs); 
        }).catch(err => {
            console.log(`The error is ${err}`)
        })
    }, [searchQuery, searchParams])
    
    return (
        <>
            <div className="px-32 py-[52px] z-10 relative overflow-auto h-full font-source-sans-pro">
                <div className="flex flex-col gap-4 mb-4">
                    <div className="mx-auto">
                        <InputField customStyles={["py-4", "w-[600px]", "text-2xl"]} query={query} inputCallback={(query) => setQuery(query)} onKeyDownCallback={() => {
                            console.log("Enter is being clicked")
                            navigateWithQuery(query);
                        }} />
                    </div>
                </div>
                <div className="flex flex-col gap-8">
                {
                    searchResults.length === 0 ? 
                    <>
                        <div>No results</div>
                    </> : 
                    searchResults.map((record) => {
                        return (
                            <div>
                                <DisplayResults 
                                    id={record.id}
                                    title={record.title}
                                    source={record.source}
                                    sourceName={record.sourceName}
                                    releaseDate={record.releaseDate}
                                    content={record.content}
                                />
                            </div>
                        )
                    })
                }
                </div>
            </div>
        </>
        // <div className='text-center'>
        //     {/* <h3>What would you like to search?</h3> */}
        //     {/* <UserInput query={query} setQuery={setQuery} /> */}
        //     <Axios query={query} />
        // </div>
    )
}

export default SearchResults;