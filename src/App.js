import React from 'react';
import { useState } from 'react';
import Filter from './components/Filter.js';
import NavBar from './components/NavBar.js';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import BandeAnnonce from "./components/BandeAnnonce"

function App() {

  const [movieList, setMovieList] = useState([
    { title: 'HARRY POTTER',
      posterUrl: 'https://fr.web.img3.acsta.net/r_640_360/newsv7/20/09/17/10/21/0660029.jpg',
      trailerLink:'https://youtu.be/_EC2tmFVNNE',
      description: 'Harry Potter is an orphaned boy brought up by his unkind Muggle (non-magical) aunt and uncle. At the age of eleven, half-giant Rubeus Hagrid informs him that he is actually a wizard and that his parents were murdered by an evil wizard named Lord Voldemort.',
      rate: "5" },
    { title: 'DRAGONS',
      posterUrl: 'https://i-mom.unimedias.fr/2020/09/16/la-princesse-et-la-grenouille_1.jpg?auto=format%2Ccompress&crop=faces&cs=tinysrgb&fit=crop&h=230&w=420',
      trailerLink:'https://youtu.be/Bm9m0sTcIO8',
      description: 'Raya et le Dernier Dragon (Raya and the Last Dragon) est un film d animation américain de fantasy produit par Walt Disney',
      rate: "4" },

      { title: 'Le Voyage ARLO',
      posterUrl:'https://i.unimedias.fr/2012/11/06/Film-a-Noel-selection-de-films-d-animation-pour-enfants_0.jpg?auto=format%2Ccompress&crop=faces&cs=tinysrgb&fit=crop&h=590&w=1050',
       trailerLink:'https://youtu.be/sa-_HfLs4X8',  
          description: 'ayala est un film réalisé par Federico Milella et Aina Järvine avec les voix de Madison',
      rate: "3" },

      { title: 'Aladin',
      posterUrl:'https://www.webjunior.net/img/films/aladin.jpg',
       trailerLink:'https://youtu.be/w3jZYizLNNo', 
      description: 'Durant l un de ses voyages, un marin raconte une histoire à ses deux enfants. Aladdin, un jeune homme des rues au cœur pur vivant dans le royaume d Agrabah',
      rate: "5" },

  ])

  const [newTitle, setNewTitle] = useState("");
  const [newRate, setNewRate] = useState("");

  const handleFilter = (fTitle, fRate) => {
    setNewTitle(fTitle)
    setNewRate(fRate)
  }

  const handleAdd = (newMovie) => {
    setMovieList([...movieList, newMovie]);
  }
  return (
    
       <Router>

      <Route exact path='/' >
        <div className="">
          <NavBar handleAdd={handleAdd} handleFilter={handleFilter} />
          <Filter movieList={movieList} newRate={newRate} newTitle={newTitle} />

        </div>
      </Route>
      <Route exact path="/BandeAnnonce/:id" render={(props) => <BandeAnnonce movieList={movieList} {...props} />} />
    </Router>
  );
}
export default App;