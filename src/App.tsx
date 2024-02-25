import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import "./App.css";

import Nav from "./components/Nav/Nav";
import NewIdea from "./components/NewIdea/NewIdea";
import Tile from "./components/Tile/Tile";
import SortOptions from "./components/SortOptions/SortOptions";

export type Idea = {
  id: string;
  title: string;
  desc: string;
  created: Date;
  updated: Date;
}

const App = () => {
  const [ideas, setIdeas] = useState<Idea[]>([]);
  
  // Check local storage for data and loads it if it exists
  useEffect(() => {
    const data = localStorage.getItem("IDEA_DATA");
    if (data !== null) {
      const storedIdeas = JSON.parse(data).map((idea: Idea) => {
        return {
          ...idea,
          created: new Date(idea.created),
          updated: new Date(idea.updated),
        };
      });
      setIdeas(storedIdeas);
    }
  }, []);

  // Update local storage
  useEffect(() => {
    localStorage.setItem("IDEA_DATA", JSON.stringify(ideas));
  }, [ideas]);

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
    const newIdeas = [...ideas, newIdea];
    setIdeas(newIdeas);
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

  const handleSortIdeas = (sortOrder: string) => {
    const sortedIdeas = [...ideas];
    if (sortOrder === "alphabetically") {
      sortedIdeas.sort((a, b) => {
        if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
        if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
        return 0;
      });
      setIdeas(sortedIdeas);
    } else if (sortOrder === "newest-to-oldest") {
      sortedIdeas.sort((a, b) => {
        if (a.updated > b.updated) return -1;
        if (a.updated < b.updated) return 1;
        return 0;
      });
      setIdeas(sortedIdeas);
    }
  };

  return (
    <div id="app">
      <Nav />
      <main id="main" data-testid="main">
        <div className="new-container">
          <NewIdea handleSubmit={handleAddIdea} />
        </div>
        <div className="list-container">
          <SortOptions handleSortIdeas={handleSortIdeas} />
          {viewIdeas}
        </div>
      </main>
      <footer id="footer">
        <p>Created by Will Delorm.</p>
      </footer>
    </div>
  );
};

export default App;
