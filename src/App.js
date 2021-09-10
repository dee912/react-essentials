import './App.css'

function SecretComponent() {
  return <h1>Super secret information for auth only</h1>
}

function RegularComponent() {
  return <h1>Everyone can see</h1>
}
function App(props) {
  return (
    <>
    {props.authorized ? <SecretComponent /> : <RegularComponent />}
    </>
  )
  
}

export default App;
