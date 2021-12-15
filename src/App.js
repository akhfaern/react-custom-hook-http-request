import useHttpRequest from "./hooks/useHttpRequest";
import React from "react";

function App() {
  const {data, error, loading, refresh} = useHttpRequest("https://jsonplaceholder.typicode.com/users");

  if (loading) return <h1>loading...</h1>;

  if (error) console.log(error);

  return (
    <>
      <div><button onClick={refresh}>Refresh</button></div>
      <div>
        {data?.map((user, index) => (
          <div key={index}>{user.email}</div>
        ))}
      </div>
    </>
  );
}

export default App;
