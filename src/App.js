import './App.css';
import { Appbar } from './components/appbar';
import { TopAnime } from './components/topanime';
import { HashRouter as Router,Route,Switch} from "react-router-dom";
import Search from './components/search';
function App() {
  return (
    <Router>
       <div className="App">
          <Appbar />
        </div>
        <Switch>
          <Route exact path="/" component={TopAnime} />
          <Route exact path="/search" component={Search} />
        </Switch>
    </Router>
   
  );
}

export default App;
