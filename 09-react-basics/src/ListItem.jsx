import "./ListItem.css";
import Tag from "./Tag";

// Object Destructuring in function parameters:
function ListItem({ text, important }) {
  return (
    <li
      // Inline style that changes color or style based on importance
      style={{
        fontWeight: important ? "bold" : "normal",
        color: important ? "red" : "black",
        marginBottom: "8px"
      }}
    >
      {/* Display the text passed from App.jsx */}
      {text}

      {/* Reuse our second component (Tag.jsx) */}
      <Tag
        text={important ? "Important" : "Normal"}
        color={important ? "red" : "gray"}
      />
    </li>
  );
}

export default ListItem;
