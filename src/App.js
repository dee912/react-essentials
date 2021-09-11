import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css'

function App({ login }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!login) return
    setLoading(true)
    const getData = async () => {
      try {
        const { data } = await axios.get(`https://api.github.com/users/${login}`)
        setUser(data)
        setLoading(false)
      } catch (error) {
        setError(error)
      }
    }
    getData()
  }, [login])

  return (
    <div>
        { 
          user ?
          <>
            <h1>{user.name}</h1>
            <p>{user.location}</p>
            <img src={user.avatar_url} alt={user.login}/>
          </>
          :
          null
        }
        {
          loading &&
          <h1>Loading...</h1>
        }
        {
          error &&
          <pre>{JSON.stringify(error, null, 2)}</pre>
        }
      </div>
  )
  
}

export default App;
