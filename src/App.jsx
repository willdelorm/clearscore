import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Nav from "./components/Nav/Nav";
import NewIdea from "./components/NewIdea/NewIdea";
import Tile from "./components/Tile/Tile";

const INITIAL_DATA = [
  {
    id: 1,
    title: "Idea 1",
    desc: "This is such a great idea",
    created: new Date(),
    updated: null,
  },
  {
    id: 2,
    title: "Idea 2",
    desc: "This is such a terrible idea",
    created: new Date(),
    updated: null,
  },
  {
    id: 3,
    title: "Idea 3",
    desc: "This idea could go places",
    created: new Date(),
    updated: null,
  },
];

function App() {
  const [ideas, setIdeas] = useState(INITIAL_DATA);

  const viewIdeas = ideas.length
    ? ideas.map((data) => <Tile key={data.id} data={data} />)
    : "No ideas yet...";

  return (
    <div id="app">
      <Nav />
      <main id="main">
        <div className="new-container">
          <NewIdea />
        </div>
        <div className="list-container">{viewIdeas}</div>
      </main>
    </div>
  );
}

export default App;
