import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './landing.js';
import List from './view-my-decks';
import ViewSingleDeck from './view-single-deck';
import Cards from './cards-page';
import UpdatePg from './update-deck-name-pg'
import ViewCard from './card-view';
import './App.css';


//This might need to go in env?-AF
// let baseURL = ''

// if (process.env.NODE_ENV === 'development') {
//   baseURL = 'http://localhost:3003'
// } else {
//   baseURL = 'your heroku backend url here'
// }
// console.log('current base url:', baseURL)
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/deck-lists" element={<List />} />
        <Route path="/view-single-deck" element={<ViewSingleDeck />} />
        <Route path="/view-all-cards" element={<Cards />} />
        <Route path="/update-deck-name" element={<UpdatePg />} />
        <Route path="/view-card" element={<ViewCard />} />
        {/* <Route path="/add-card" element={<AddCardToDeck />} /> */}
      </Routes>
    </BrowserRouter>
  )
}
export default App