import React, { useEffect, useState } from "react";
import { API } from "./apiexecute";

function App() {
  useEffect(() => {
    API().then((blog) => Setdata(blog));
  }, []);
  const [data, Setdata] = useState(null);
  return (
    <div>
      <h1>API FETCH</h1>
      {data ? data.map((arr) => <li>{arr.title}</li>) : <>data not found</>}
    </div>
  );
}

export default App;
