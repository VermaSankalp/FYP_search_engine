import React, {useState} from 'react';
import './App.css';
import SolrConnector from 'react-solr-connector';
import SearchBar from './Components/SolrQuery/SearchBar';
import DisplayResults from './Components/DisplayResults/DisplayResults';

const App = () => {
  const [searchParams, setSearchParams] = useState(null);

  const doSearch = (searchParams) => {
      setSearchParams(searchParams);
  }

  return (
    <SolrConnector searchParams={searchParams}>
      <SearchBar doSearch={doSearch}/>
      <DisplayResults />
    </SolrConnector>
  )
}

export default App;
