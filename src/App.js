import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Banner from "./component/Banner/Banner";
import Teams from "./component/Teams/Teams";
import TeamDetails from "./component/TeamDetails/TeamDetails";
import NotFound from "./component/NotFound/NotFound";
import Footer from "./component/Footer/Footer";

function App() {
  return (
    <div style={{backgroundColor: '#B5D3E7'}} className="">
      <Router>
        <Switch>
          <Route exact path="/">
            <Banner></Banner>
            <Teams></Teams>
          </Route>

          <Route path="/teams">
            <Teams></Teams>
          </Route>

          <Route path="/team/:idTeam">
            <TeamDetails></TeamDetails>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
