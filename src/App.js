import React, { useEffect, useState } from 'react';
import './App.css'

function App() {
  const [emotion, setEmotion] = useState('happy')
  const [secondary, setSecondaty] = useState('tired')

  useEffect(() => {
    console.log(`It's ${emotion} around here!`)
  }, [emotion])

  useEffect(() => {
    console.log(`It's ${secondary} around here!`)
  }, [secondary])

  return (
    <>
    <h1>Current emotion is {emotion} and {secondary}.</h1>
    <button onClick={() => setEmotion("happy")}>Make Happy</button>
    <button onClick={() => setSecondaty("crabby")}>Crabby</button>
    <button onClick={() => setEmotion("frustrated")}>Frustrate</button>
    <button onClick={() => setEmotion("enthusiastic")}>Enthus</button>
    
    </>
  )
  
}

export default App;
