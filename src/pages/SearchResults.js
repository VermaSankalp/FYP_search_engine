
import UserInput from "../common/Components/userInput";
import Axios from "../axios";
import { useState } from 'react'; 
import { useSearchParams } from 'react-router-dom';


const SearchResults = () => {
    const [searchParams] = useSearchParams();
    const [query, setQuery] = useState(searchParams.get("query"));

    return (
        <div className='text-center'>
            <h3>What would you like to search?</h3>
            {/* <UserInput query={query} setQuery={setQuery} /> */}
            <Axios query={query} />
      </div>
    )
}

export default SearchResults;