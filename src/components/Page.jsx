import { createContext, useContext, useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Context = createContext();

export const usePageContext = () => useContext(Context);

export default function Page({ sx, ...otherProps }) {
  const [isInitialized, setIsInitialized] = useState(false);
  const navigate = useNavigate();

  const navigateToLogin = () => navigate('/login', { replace: true });

  useEffect(() => {
    if (!sessionStorage.token) {
      navigateToLogin();
    } else {
      setIsInitialized(true);
    }
  }, []);

  return (
    <Context.Provider value={isInitialized}>
      <Box
        sx={{
          height: '100vh',
          // width: '100vw',
          display: 'flex',
          flexDirection: 'column',
          ...sx,
        }}
        {...otherProps}
      />
    </Context.Provider>
  );
}
