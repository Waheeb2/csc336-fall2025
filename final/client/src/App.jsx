import { useState, useEffect } from 'react'


function App() {
  const[fromServer, setFromServer] = useState({something: 0});

  useEffect(() => {

    fetch("/api/data")
      .then(result =>  result.json())
      .then(data => setFromServer(data));

      }, []);
 

  return (
    <>
      {fromServer.something}
    </>
  )
}

export default App
