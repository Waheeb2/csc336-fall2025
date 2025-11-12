import { useState } from 'react'

function App() {
  //const {x, setX} = useState(10);

  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([
    
  ])
  let todos = [
    {
      task: "Beat Mario Sunshine",
      complete: true
    }
  ]

  return (
    <div>
      Hello world. Here is a number: {x}
      <ul>
        {todos.map((todo)=>(
          <li>(todo.task)</li>
        ))}
      </ul>
    </div>
  )
}

export default App
