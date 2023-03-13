import * as React from 'react'


function App() {
  const stories = [
    {
      title: "React",
      url: "https://reactjs.org/",
      author: "Jordan Walke",
      num_comments: 3,
      points: 4,
      objectId: 0
    },
    {
      title: "Redux",
      url: "https://redux.js.org/",
      author: "Dan Abramov, Andrew Clark",
      num_comments: 2,
      points: 5,
      objectId: 1
    }
  ]
  return (
    <div>
      <h1>My Hacker Stories</h1>
      <Search />
      <hr />
      <h4>Used Map Method</h4>
      <List list={stories} />
    </div>
  )
}


function Search() {
  const handleChange = (event) => {
    console.log(event);
    console.log(event.target.value);
  }

  return (
    <div>
      <label htmlFor="search">Search : </label>
      <input type="text" id="search" placeholder="Text" onChange={handleChange} />
    </div>
  )
}

const List = (props) => (
  <div>
    <ul>
      {props.list.map((item) => (
        <Item key={item.objectId} item={item} />
      ))}
    </ul>
  </div>
)

const Item = (props) => (
  <li>
    <span>
      <a href={props.item.url}>{props.item.title}</a>
    </span>
    <span>{props.item.author}</span>
    <span>{props.item.num_comments}</span>
    <span>{props.item.points}</span>
  </li>
)

export default App
