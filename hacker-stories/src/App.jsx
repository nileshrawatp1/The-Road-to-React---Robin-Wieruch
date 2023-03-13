import * as React from 'react'


function App() {

  return (
    <div>
      <h1>My Hacker Stories</h1>
      <Search />
      <hr />
      <h4>Used Map Method</h4>
      <List />
    </div>
  )
}


function Search() {
  const handleChange = (event) => {
    console.log(event);
    console.log(event.target.value);
  }
  const handleBlur = (event) => {
    console.log(event);
    console.log(event.target.value);
  }
  return (
    <div>
      <label htmlFor="search">Search : </label>
      <input type="text" id="search" placeholder="Text" onChange={handleChange} />
      <label htmlFor="blurEvent">On Blur : </label>
      <input type="text" id="blur" placeholder="When clicked outside the element" onBlur={handleBlur} />
    </div>
  )
}

const List = () => (
  <div>
    <ul>
      {
        list.map((item) => (
          <li key={item.objectId}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
          </li>
        )
        )
      }
    </ul>
  </div>
)
export default App
