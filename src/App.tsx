import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { Idea } from "./types/types";
import "./App.css";

import Nav from "./components/Nav/Nav";
import NewIdea from "./components/NewIdea/NewIdea";
import Tile from "./components/Tile/Tile";

const INITIAL_DATA: Array<Idea> = [
  {
    id: nanoid(),
    title: "Idea 1",
    desc: "This is such a great idea",
    created: new Date(),
    updated: new Date(),
  },
  {
    id: nanoid(),
    title: "Idea 2",
    desc: "This is such a terrible idea",
    created: new Date(),
    updated: new Date(),
  },
  {
    id: nanoid(),
    title: "Idea 3",
    desc: "This idea could go places",
    created: new Date(),
    updated: new Date(),
  },
];

function App() {
  const [ideas, setIdeas] = useState(Array<Idea>);

  useEffect(() => {
    setIdeas(INITIAL_DATA);
  }, []);

  const handleAddIdea = (data: Idea) => {
    const { title, desc } = data;
    const now = new Date();

    const newIdea = {
      id: nanoid(),
      title,
      desc,
      created: now,
      updated: now,
    };
    setIdeas([...ideas, newIdea]);
  };

  const handleUpdateIdea = (
    id: string,
    field: keyof Idea,
    value: string | Date
  ) => {
    const updatedIdeas = ideas.map((idea) => {
      if (idea.id === id) {
        if (field === "created" || field === "updated") {
          idea[field] = value as Date;
        } else {
          idea[field] = value as string;
        }
        idea.updated = new Date();
      }
      return idea;
    });
    setIdeas(updatedIdeas);
  };

  const handleDeleteIdea = (id: string) => {
    const filteredIdeas = ideas.filter((idea: Idea) => idea.id !== id);
    setIdeas(filteredIdeas);
  };

  const viewIdeas = ideas.length
    ? ideas.map((idea: Idea) => (
        <Tile
          key={idea.id}
          data={idea}
          handleDelete={handleDeleteIdea}
          handleUpdate={handleUpdateIdea}
        />
      ))
    : "No ideas yet...";

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
