import logo from './logo.svg';
import './App.css';

function App() {
  const handleClick = () => {
    alert('btn is clicked');
  };
  return (
    <div>
      <h1>Hello React!</h1>
      <button onClick={handleClick}>Click btn</button>
    </div>
  );
}


export default App;
