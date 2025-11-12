import { useState } from "react";
import ListItem from "./ListItem";
import "./App.css";

// main App component
function App() {
  // Create state for the input field (text the user types)
  const [inputValue, setInputValue] = useState("");

  // Create state for the list of items
  const [items, setItems] = useState([
    { text: "Finish homework", important: true },
    { text: "Prepare Dinner", important: true },
    { text: "Walk the dog", important: false },
    { text: "Read a book", important: false }
  ]);

  // Function to add a new item to the list
  function handleAdd() {
    // Ignore if input is empty
    if (inputValue.trim() === "") return;

    // Add a new item to the array (spread existing items first)
    setItems([...items, { text: inputValue, important: false }]);

    // Clear  input field
    setInputValue("");
  }

  return (
    <div>
      <h1>My To Do List</h1>

      {/* Input for new item and button to add it */}
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Type in new task..."
      />
      <button onClick={handleAdd}>Add</button>

      {/* Loop through the array and display each item */}
      <ul>
        {items.map((item, index) => (
          <ListItem
            key={index}
            text={item.text}
            important={item.important}
          />
        ))}
      </ul>
    </div>
  );
}


export default App;
