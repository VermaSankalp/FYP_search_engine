import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import SolrConnector from 'react-solr-connector';

const App = () => {
  const [searchParams, setSearchParams] = useState(null);

  return (
    <SolrConnector searchParams={searchParams}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </SolrConnector>
  )
}

export default App;
