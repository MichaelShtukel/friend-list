import { Routes, Route } from 'react-router-dom';
import FriendList from './components/FriendList';
import FriendDetail from './components/FriendDetail';

function App() {
  return (
    <Routes>
      <Route path="/" element={<FriendList />} />
      <Route path="/friends/:id" element={<FriendDetail />} />
    </Routes>
  );
}

export default App;
