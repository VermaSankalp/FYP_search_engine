import React, {useState} from 'react';
import './App.css';
import SolrConnector from 'react-solr-connector';
import SearchBar from './Components/SeachBar.js';
import DisplayResults from './Components/DisplayResults.js';

const App = () => {
  const [searchParams, setSearchParams] = useState(null);
  const [userQuery, setUserQuery] = useState('');

  return (
    <SolrConnector searchParams={searchParams}>
      <SearchBar userQuery={userQuery}/>
      <DisplayResults />
    </SolrConnector>
  )
}

export default App;
