import axios from "axios";
import { useState } from "react";

function App() {
  let [name, updateName] = useState("default");
  let handleNextReq = () => {
    axios.get("/api").then((res) => {
      console.log(res);
      updateName(res.data.name);
    });
  };
  return (
    <div>
      <button onClick={handleNextReq}>click</button>
      <h1>hello {name}</h1>
    </div>
  );
}

export default App;
