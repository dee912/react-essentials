import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css'

function App({ login }) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(`https://api.github.com/users/${login}`)
      setUser(data)
    }
    getData()
  }, [login])

  if (user) {
    return <div>{JSON.stringify(user)}</div>
  }

  return <div>No User Available</div>
  
}

export default App;
