import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from 'react';
import CharacterDetails from './components/CharacterDetails/CharacterDetailsContainer';
import CharactersList from './components/CharactersList/CharactersListContainer';

function App() {
  const [character, setCharacter] = useState("");
  const searchInput = {character: character, setCharacter: setCharacter}
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="" element={<CharactersList />} />
            <Route path="/character/:id" element={<CharacterDetails />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
