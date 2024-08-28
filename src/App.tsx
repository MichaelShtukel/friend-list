import { Container } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import FriendListPage from './pages/FriendListPage';
import FriendDetailPage from './pages/FriendDetailPage';

function App() {
  return (
    <Container py="10">
      <Routes>
        <Route path="/" element={<FriendListPage />} />
        <Route path="/friends/:id" element={<FriendDetailPage />} />
      </Routes>
    </Container>
  );
}

export default App;
