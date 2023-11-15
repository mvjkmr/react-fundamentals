// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input
  
  const userNameRef = React.useRef();
  const submitRef = React.useRef();
  //const [error, setError] = React.useState();
  const [username, setUsername] = React.useState("");

  const handleSubmit = event => {
    event.preventDefault();
    //const aa = userNameRef.current.value;
    //onSubmitUsername(event.target.txtUserName.value);
    onSubmitUsername(username);
    // onSubmitUsername(userNameRef.current.value);
  }

  const handleTextChange = event => {
    const {value} = event.target;
    //const isLowerCase = value === value.toLowerCase();
    setUsername(value.toLowerCase());
    //setError(isLowerCase?null:"Username must be in lowercase!")
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='txtUserName'>Username:</label>
        <input id='txtUserName' ref={userNameRef} onChange={handleTextChange} value={username} type="text" />
        {/* <p><span id='errorMessage' style={{color:'red', fontWeight:'Bold'}}>{error}</span></p> */}
      </div>
      <button id="btnSubmit" ref={submitRef} type="submit">Submit</button>
      {/* <button id="btnSubmit" ref={submitRef} disabled={Boolean(error)} type="submit">Submit</button> */}
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
