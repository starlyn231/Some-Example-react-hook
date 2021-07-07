import React, { useEffect, useState } from "react";

function GitHubApi() {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    fetch("https://api.github.com/users?per_page=4")
      .then((res) => res.json())
      .then(
        (data) => {
          setData(data);
          setLoading(false);
          console.log(isLoading);
        },
        (error) => {
          setError(error);
          console.log(error);
          setLoading(false);
        }
      );
  }, []);
  console.log(isLoading);
  if (error) {
    return <div>Fetch Request Error:{error.message}</div>;
  } else if (isLoading) {
    return <h1>Loading Data ...</h1>;
  } else {
    return (
      <div className="App">
        <h1>React AJAX call</h1>
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.login}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default GitHubApi;
