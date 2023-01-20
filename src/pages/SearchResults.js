
import UserInput from "../common/Components/userInput";
import Axios from "../axios";
import { useState } from 'react'; 

const SearchResults = () => {
    const [query, setQuery] = useState("russia");

    return (
        <div className='text-center'>
            <h3>What would you like to search?</h3>
            <UserInput query={query} setQuery={setQuery} />
            <Axios query={query} />
      </div>
    )
}

export default SearchResults;