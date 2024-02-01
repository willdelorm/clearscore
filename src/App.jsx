import { useState } from "react";
import { nanoid } from "nanoid";
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

  const handleAddIdea = (data) => {
    const { title, desc } = data;
    const newIdea = {
      id: nanoid(),
      title,
      desc,
      created: new Date(),
      updated: null,
    };
    setIdeas([...ideas, newIdea]);
  };

  return (
    <div id="app">
      <Nav />
      <main id="main">
        <div className="new-container">
          <NewIdea handleSubmit={handleAddIdea} />
        </div>
        <div className="list-container">{viewIdeas}</div>
      </main>
    </div>
  );
}

export default App;
