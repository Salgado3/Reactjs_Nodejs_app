import React from "react";
import "./App.css";
import Navbar from "./Components/navbar";
function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <p> Hello World!!!</p>
        <p>{!data ? "Loading..." : data}</p>
      </header>
    </div>
  );
}

export default App;
