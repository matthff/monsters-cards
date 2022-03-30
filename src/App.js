import { useState, useEffect } from 'react';

import './App.css';

import CardList from './components/CardList/card-list-component';
import SearchBox from './components/SearchBox/search-box-component';

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState([]);


  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });

    setFilteredMonsters(newFilteredMonsters);
  }, [searchField, monsters]);

  const onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase();
    setSearchField(searchField);
  }
  
  return (
    <div className="App">
      <h1 className='app-title'>Monsters Roledex</h1>
      <SearchBox 
        className="search-box" 
        onChangeHandler={onSearchChange} 
        placeholder="search monsters" 
      />
      <CardList monsters={filteredMonsters}/>
    </div>
  );
}

export default App;
