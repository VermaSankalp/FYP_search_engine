import React, {useState} from 'react';
import './App.css';
// import SolrConnector from 'react-solr-connector';
// import SearchBar from './Components/SolrQuery/SearchBar';
// import DisplayResults from './Components/DisplayResults/DisplayResults';
import Ting from './axios';
import UserInput from './Components/userInput';

const App = () => {
  // const [searchParams, setSearchParams] = useState(null);
  const [query, setQuery] = useState("russia");

  // const doSearch = (searchParams) => {
  //     setSearchParams(searchParams);
  // }

  return (
    // <SolrConnector searchParams={searchParams}>
    //   <SearchBar doSearch={doSearch}/>
    //   <DisplayResults />
    // </SolrConnector>
    <div className='overallDiv'>
      <h3>What would you like to search?</h3>
      <UserInput query={query} setQuery={setQuery} />
      <Ting query={query} />
    </div>
  )
}

export default App;
