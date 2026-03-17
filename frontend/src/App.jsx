import { Box } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import ViewQuizzes from './pages/ViewQuizzes';
import MakeQuizzes from './pages/MakeQuizzes';
import TakeQuiz from './pages/TakeQuiz';

function App() {
  return (
    <>
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/giveQuizzes" element={<ViewQuizzes />} /> 
          <Route path="/makeQuizzes" element={<MakeQuizzes />} />
          <Route path="/takeQuiz/:code" element={<TakeQuiz />} />
        </Routes>
      </Box>
    </>
  )
}

export default App
