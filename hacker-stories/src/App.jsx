import * as React from 'react'


const App = () => {
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
  // ! Callback Function
  const handleSearch = (event) => {
    console.log(event.target.value);
  }

  return (
    <div>
      <h1>My Hacker Stories</h1>
      <Search />
      <hr />
      <h4>List Of Stories</h4>
      <List list={stories} />
    </div>
  )
}


const Search = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  }

  return (
    <div>
      <label htmlFor="search">Search : </label>
      <input type="text" id="search" placeholder="Text" onChange={handleChange} />
      <p>Searching for <strong>{searchTerm}</strong></p>
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
