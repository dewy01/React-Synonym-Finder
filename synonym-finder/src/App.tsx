import { useState } from 'react'
import './App.css'

function App() {
  const [word, setWord] = useState<string>()

  const handeFetchSynonym = (e) => {
    e.preventDefault();

  }

  return (
    <>
      <div>
      <form method="POST" action="/url" onSubmit={handeFetchSynonym}>
        <label htmlFor='word-input'>Your Word</label>
        <input id='word-input'
          value={word}
          onChange={(e) => setWord(e.target.value)}
        ></input>
        <button>Submit</button>
      </form>
      </div>
    </>
  )
}

export default App
