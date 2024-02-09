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
    title: "Capture all of your ideas in one place",
    desc: "Create a new idea using the New Idea field. Edit any idea by clicking on the text. Delete ideas with the red delete icon.",
    created: new Date("2024-01-13"),
    updated: new Date("2024-01-13"),
  },
  {
    id: nanoid(),
    title: "Organize your ideas",
    desc: "Use the dropdown to organize your ideas by most-recently updated or alphabetically.",
    created: new Date("2023-08-24"),
    updated: new Date("2023-08-24"),
  },
  {
    id: nanoid(),
    title: "Get your ideas flowing now",
    desc: "Clear out these example ideas and start creating your own!",
    created: new Date("2023-06-02"),
    updated: new Date("2023-06-02"),
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
      <footer id="footer">
        <p>Created by Will Delorm.</p>
      </footer>
    </div>
  );
}

export default App;
