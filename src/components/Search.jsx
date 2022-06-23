import React, { useEffect, useState } from "react";
import axios from "axios";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const searchFunc = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: searchTerm,
        },
      });
      console.log(data);
      setSearchResults(data.query.search);
    };

    if (searchTerm && !searchResults.length) {
      searchFunc();
    } else {
      const setTimeoutID = setTimeout(() => {
        if (searchTerm) {
          searchFunc();
        }
      }, 1000);

      return () => {
        clearTimeout(setTimeoutID);
      };
    }
  }, [searchTerm]);

  const renderedResult = searchResults.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
            className="ui button"
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>

          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label> Enter Search Term</label>
          <input
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
            className="input"
          />
        </div>
      </div>
      <div className="ui celled list">{renderedResult}</div>
    </div>
  );
};

export default Search;
