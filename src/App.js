import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import SolrConnector from 'react-solr-connector';
import SearchBar from './Components/seachBar';

const App = () => {
  const [searchParams, setSearchParams] = useState(null);

  return (
    <SolrConnector searchParams={searchParams}>
      <SearchBar />
    </SolrConnector>
  )
}

export default App;
