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
  const [fetchFields, setFetchFields] = useState("");

  // const doSearch = (searchParams) => {
  //     setSearchParams(searchParams);
  // }

  return (
    // <SolrConnector searchParams={searchParams}>
    //   <SearchBar doSearch={doSearch}/>
    //   <DisplayResults />
    // </SolrConnector>
    <div style={{marginLeft: '30px'}}>
      <UserInput query={query} setQuery={setQuery} fetchFields={fetchFields} setFetchFields={setFetchFields} />
      <Ting query={query} fetchFields={fetchFields} />
    </div>
  )
}

export default App;
