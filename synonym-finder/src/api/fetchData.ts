
const API_URL = `https://api.datamuse.com`

export const fetchSynonyms = (word: string) => {
    return fetch(`${API_URL}/words?rel_syn=${word}`)
    .then((response) => response.json())
    .catch((error) => console.error('Error fetching synonyms:', error));
  }