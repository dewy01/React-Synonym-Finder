import React, { useState } from 'react';
import './App.css';
import { fetchSynonyms } from './api/fetchData';

type Synonym = {
  word: string;
  score: number;
};

function App() {
  const [word, setWord] = useState<string>('');
  const [synonyms, setSynonyms] = useState<Synonym[]>([]);

  const handleFetchSynonyms = (e: React.FormEvent) => {
    e.preventDefault();
    fetchSynonyms(word).then(setSynonyms);
  };

  const handleSynonymClicked = (synonym: string) => {
    setWord(synonym);
    fetchSynonyms(synonym).then(setSynonyms);
  };

  return (
    <div className='App'>
      <div>
        <h1> Synonym Finder </h1>
        <form onSubmit={handleFetchSynonyms}>
          <label htmlFor='word-input'>Your Word</label>
          <input
            id='word-input'
            value={word}
            onChange={(e) => setWord(e.target.value)}
          />
          <button>Search</button>
        </form>
      </div>
      <div>
        <ul>
          {synonyms &&
            synonyms.slice(0, 10).map((synonym, index) => (
              <li
              onClick={() => handleSynonymClicked(synonym.word)} 
              key={index}>{synonym.word}</li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
