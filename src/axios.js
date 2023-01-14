import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Ting = (props) => {
    const [bigMan, setBigMan] = useState();
    const [solrSearchUrl, setSolrSearchUrl] = useState("");
    // const [query, setQuery] = useState("russia");
    // const [fetchFields, setFetchFields] = useState("content");

   useEffect(() => {
       setSolrSearchUrl("http://localhost:8983/solr/fyp_documents/select?fl=" + props.fetchFields + "&indent=true&q.op=OR&q=" + props.query)
       axios.get(solrSearchUrl)
       .then(res => {
           const bigManTing = res.data.response.docs;
           setBigMan(bigManTing);
        //    console.log(bigMan);
        //    console.log(bigManTing);
       })
   }, [props.fetchFields, props.query, solrSearchUrl])

   return (
        <div>
            {bigMan !== undefined ? 
            bigMan.map(obj => {
                return (
                    <div>
                        <p>{obj.id}</p>
                        <p>{obj.releaseDate}</p>
                    </div>
                );
            })
             : "Piss off"}
        </div>
   )
}

export default Ting;