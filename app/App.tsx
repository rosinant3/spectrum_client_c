import './App.css';
import { BrowserRouter } from "react-router-dom";
import AppRoutes from './Routes/Routes';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useLocalStorage } from './AppHooks';

const theme = createTheme({
    palette: { 
      primary: {
        main: "#0c2e4e"
      }
    }
});

function App() {
  
  useLocalStorage();

  return (<>
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </ThemeProvider>

  </>
  );
}

export default App;