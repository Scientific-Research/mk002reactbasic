// import { useState } from 'react'
import "./App.scss";
import germanNouns from "./data/germanNouns.json";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Test Site</h1>
      <p>This is a Test.</p>
      <h2>There are {<span>{germanNouns.length}</span>} German Nouns</h2>
      <h3 className="nouns">
        {germanNouns.map((noun) => {
          return (
            <div className="noun">
              <div>{`article: ${noun.article}`}</div>
              <div>{`singular: ${noun.singular}`}</div>
              <div>{`plural: ${noun.plural}`}</div>
            </div>
          );
        })}
      </h3>
    </div>
  );
}
export default App;
