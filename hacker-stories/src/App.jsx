import { useState } from 'react'
const title = "React Language";
function App() {
  return (
    <div>
      <h1>Hello {title}</h1>
      <label htmlFor="search">Search: </label>
      <input type="text" id="search" />
    </div>
  )
}

export default App
