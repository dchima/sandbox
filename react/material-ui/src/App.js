import logo from './logo.svg';
import './App.css';
import { Button } from '@material-ui/core'
import { Save } from '@material-ui/icons'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button 
          startIcon={<Save />}
          variant='contained'
          color='primary'>
          Desolation
        </Button>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
