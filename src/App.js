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
    return (
      <div>
        { user &&
        <>
          <h1>{user.name}</h1>
          <p>{user.location}</p>
          <img rc={user.avatar_url} alt={user.login}/>
        </>
        }
      </div>
    )
  }

  return (
    <div>No user</div>
  )
  
}

export default App;
