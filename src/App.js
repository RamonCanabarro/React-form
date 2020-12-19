import './App.css';
import First from './pages/First'
import Second from './pages/Second'
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Route exact path="/" component={First} />
      <Route path="/signup" component={Second} />
    </Router>
  );
}

export default App;
