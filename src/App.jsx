// import { useState } from 'react'
import "./App.scss";
import _germanNouns from "./data/germanNouns.json";

function App() {
  // const [count, setCount] = useState(0)
  const shuffle = (array) => {
    let currentIndex = array.length;
    console.log(currentIndex);
    while (currentIndex != 0) {
      // Returns a random integer from 0 to 123:
      const randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      //swap
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  };

  // const germanNouns = shuffle(_germanNouns).filter((m) => m.article === "der");
  const germanNouns = shuffle(_germanNouns);

  return (
    <div className="App">
      <h1>Welcome to our Website</h1>
      <h2>
        There are {<span>{germanNouns.length}</span>} randomized German Nouns.
      </h2>
      <h4>Please refresh the Page:</h4>
      <h3 className="nouns">
        {germanNouns.map((noun) => {
          return (
            <div className="noun" key={noun.singular}>
              {" "}
              {/* ohne diese div(className ="noun"), können wir  nicht alle drei Elemente vom .map bekommen und
            wir werden ansonsten nur die letztes Element(nouns.plural) bekommen. Das ist der haupt Punk,wie wir
            die drei Elemente von .map bekommen können!*/}
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
