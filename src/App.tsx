import { useEffect, useState } from "react";
import { nanoid } from "nanoid";

import Nav from "./components/Nav/Nav";
import NewIdea from "./components/NewIdea/NewIdea";
import Tile from "./components/Tile/Tile";
import SortOptions from "./components/SortOptions/SortOptions";
import {Idea} from "./utils/types"

import "./App.css";

const App = () => {
  // Check localStorage on load for existing data
  const [ideas, setIdeas] = useState<Idea[]>(() => {
    const data = localStorage.getItem("IDEA_DATA");
    if (data !== null) {
      return JSON.parse(data).map((idea: Idea) => {
        idea.created = new Date(idea.created);
        if (idea.updated) {
          idea.updated = new Date(idea.updated);
        }
        return idea;
      });
    }
    return [];
  });

  // Update localStorage
  useEffect(() => {
    localStorage.setItem("IDEA_DATA", JSON.stringify(ideas));
  }, [ideas]);

  const handleAddIdea = (idea: Idea) => {
    const { title, desc } = idea;
    const now = new Date();

    const newIdea = {
      id: nanoid(),
      title,
      desc,
      created: now,
    };
    const newIdeas = [newIdea, ...ideas];
    setIdeas(newIdeas);
  };

  const handleUpdateIdea = (
    id: string,
    title: string,
    desc: string,
    
  ) => {
    const updatedIdeas = ideas.map((idea) => {
      if (idea.id === id) {
        idea = {...idea, title, desc}
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

  const handleSortIdeas = (sortOrder: string) => {
    const sortedIdeas = [...ideas];
    switch (sortOrder) {
      case "new-to-old":
        sortedIdeas.sort((a, b) => {
          const aDate = a.updated ? a.updated : a.created;
          const bDate = b.updated ? b.updated : b.created;
  
          if (aDate > bDate) return -1;
          else if (aDate < bDate) return 1;
          else return 0;
        });
        break;
      case "old-to-new":
        sortedIdeas.sort((a, b) => {
          const aDate = a.updated ? a.updated : a.created;
          const bDate = b.updated ? b.updated : b.created;
  
          if (aDate > bDate) return 1;
          else if (aDate < bDate) return -1;
          else return 0;
        });
        break;
      case "a-z":
        sortedIdeas.sort((a, b) => {
          if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
          if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
          return 0;
        });
        break;
      case "z-a":
        sortedIdeas.sort((a, b) => {
          if (a.title.toLowerCase() < b.title.toLowerCase()) return 1;
          if (a.title.toLowerCase() > b.title.toLowerCase()) return -1;
          return 0;
        });
        break;
      default:
        sortedIdeas.sort();
    }
    setIdeas(sortedIdeas);
  };

  return (
    <div id="app">
      <Nav />
      <main id="main" data-testid="main">
        <section className="new-container">
          <NewIdea handleAddIdea={handleAddIdea} />
        </section>
        <section className="list-container">
          <SortOptions handleSortIdeas={handleSortIdeas} />
          {ideas.length ? (
            ideas.map((idea: Idea) => (
              <Tile
                key={idea.id}
                tileData={idea}
                handleDelete={handleDeleteIdea}
                handleUpdate={handleUpdateIdea}
              />
            ))
          ) : (
            <div className="empty-container">
              <p>Ready for a brilliant idea!</p>
            </div>
          )}
        </section>
      </main>
      <footer id="footer">
        <a href="https://github.com/willdelorm" target="_blank">
          Created by Will Delorm.
        </a>
      </footer>
    </div>
  );
};

export default App;
