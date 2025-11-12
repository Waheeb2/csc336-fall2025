// Tag.jsx
// A small reusable component that displays a colored label (tag)

function Tag({ text, color }) {
  const styles = {
    display: "inline-block",
    padding: "3px 8px",
    borderRadius: "8px",
    backgroundColor: color,
    color: "white",
    fontSize: "12px",
    marginLeft: "10px"
  };

  return <span style={styles}>{text}</span>;
}

export default Tag;
