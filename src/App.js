import Navbar from "./components/Navbar";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Planets from "./pages/Planets";
import People from "./pages/People";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Redirect to="/planets" />
          </Route>
          <Route path="/planets" component={Planets} />
          <Route path="/people" component={People} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
