import { useState, useEffect } from 'react'


function App() {
  const[fromServer, setFromServer] = useState({something: 0});

  useEffect(() => {
    setFromServer({something:99999});
  }, []);

  return (
    <>
      {fromServer.something}
    </>
  )
}

export default App
