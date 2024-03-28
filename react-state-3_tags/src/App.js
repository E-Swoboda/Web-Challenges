import { useState } from "react";
import "./styles.css";
import Form from "./components/Form/index.js";
import List from "./components/List/index.js";

export default function App() {
  const [tags, setTags] = useState(["JavaScript", "React", "CSS", "HTML"]);

  const addTag = (tag) => {
    setTags([...tags, tag]);
  };

  const deleteTag = (index) => {
    const updatedTags = [...tags];
    updatedTags.splice(index, 1);
    setTags([updatedTags]);
  };

  const handleDeleteTag = (tagToDelete) => {
    const updatedTags = tags.filter((tag) => tag !== tagToDelete);
    setTags(updatedTags);
  };

  return (
    <main className="app">
      <Form onAddTag={addTag} />
      <List tags={tags} onDeleteTag={handleDeleteTag} />
    </main>
  );
}
