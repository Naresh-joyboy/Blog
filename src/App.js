import Navbar from './Navbar'
import './App.css';
import Home from './Home'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Create from './Create';
import BlodDetails from './BlodDetails';
import NotFound from './NotFound';



function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>         
          <Route path='/create'>
            <Create/>
          </Route>         
          <Route path='/blogs/:id'>
            <BlodDetails/>
          </Route>
          <Route path='*'>
            <NotFound/>
          </Route>         
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
