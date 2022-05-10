import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { QueryClient, QueryClientProvider } from 'react-query';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/Homepage';
import HomeworkPage from './pages/HomeworkPage';

import theme from '../theme';

export default function App() {
  const queryClient = new QueryClient();

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/homework" element={<HomeworkPage />} />
            <Route path="/" element={<HomePage />} exact />
          </Routes>
        </Router>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
