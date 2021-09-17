
import Cookies from 'universal-cookie';
import './App.css';

function App() {

  const handleClick = () => {
    const cookies = new Cookies();
    cookies.set('version', 'newApp', { path: '/' });
    // window.location.reload();
  }
  
  return (
    <div className="App">
      <h2>Version - {process.env.REACT_APP_VERSION}</h2>
      <button onClick={handleClick}>
        Navigate to Second App
      </button>
    </div>
  );
}

export default App;
