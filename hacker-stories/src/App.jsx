import * as React from 'react'
function getTitle(title) {
  return title;
}
const nums = [1, 2, 3, 4, 5];

function App() {
  return (
    <div>
      <h1>Hello React</h1>
      <h1>Hello {getTitle('React')}</h1>
      <label htmlFor="search">Search: </label>
      <input type="text" id="search" placeholder={nums.map(function (num) { return num * 2 })} />
    </div>
  )
}

export default App
