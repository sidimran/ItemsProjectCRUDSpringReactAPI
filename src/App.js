import { BrowserRouter as Router, Route } from "react-router-dom";
import AddItems from "./components/AddItems";
import Header from "./components/Header";
import ListItems from "./components/ListItem";

function App() 
{
  return (
    <div className="App">
      <Header />
      <Router>
        <Route path="/" exact component={ListItems}></Route>
        <Route path="add-item" component={AddItems}></Route>
      </Router>
    </div>
  );
}

export default App;
