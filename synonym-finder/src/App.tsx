import React, { useState } from 'react';
import './App.css';

type Synonym = {
  word: string;
  score: number;
};

function App() {
  const [word, setWord] = useState<string>('');
  const [synonyms, setSynonyms] = useState<Synonym[]>([]);

  const handleFetchSynonyms = (e: React.FormEvent) => {
    e.preventDefault();
    fetch(`https://api.datamuse.com/words?rel_syn=${word}`)
      .then((response) => response.json())
      .then(setSynonyms)
      .catch((error) => console.error('Error fetching synonyms:', error));
  };

  return (
    <div className='App'>
      <form onSubmit={handleFetchSynonyms}>
        <label htmlFor='word-input'>Your Word</label>
        <input
          id='word-input'
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />
        <button>Submit</button>
      </form>
      <ul>
        {synonyms &&
          synonyms.map((synonym, index) => (
            <li key={index}>{synonym.word}</li>
          ))}
      </ul>
    </div>
  );
}

export default App;
