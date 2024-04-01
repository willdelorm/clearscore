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
  updated?: Date;
};

const App = () => {
  const [ideas, setIdeas] = useState<Idea[]>((): Idea[] => {
    const data = localStorage.getItem("IDEA_DATA");
    if (data !== null) {
      return JSON.parse(data).map((idea: Idea) => {
        idea.created = new Date(idea.created);
        if (idea.updated) {
          idea.updated = new Date(idea.updated);
        }
        return idea;
      });
    } else {
      return [];
    }
  });

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
    };
    const newIdeas = [...ideas, newIdea];
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

  const handleDeleteIdea = (idToDelete: string) => {
    const filteredIdeas = ideas.filter((idea: Idea) => idea.id !== idToDelete);
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
        <div className="new-container">
          <NewIdea handleAddIdea={handleAddIdea} />
        </div>
        <div className="list-container">
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
        </div>
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
