import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Ting = (props) => {
    const [bigMan, setBigMan] = useState();
    const [solrSearchUrl, setSolrSearchUrl] = useState("");
    // const [query, setQuery] = useState("russia");
    // const [fetchFields, setFetchFields] = useState("content");

   useEffect(() => {
       setSolrSearchUrl("/solr/fyp_documents/select")
       axios.get(solrSearchUrl, {
           params: {
               "fl": props.fetchFields,
               "q": props.query,
               "indent": true,
               "q.op": "OR"
           }
       })
       .then(res => {
           const bigManTing = res.data.response.docs;
           setBigMan(bigManTing);
        //    console.log(solrSearchUrl);
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