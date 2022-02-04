import "./App.css";
import { Route, Switch } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import LandPage from "./Pages/LandPage/LandPage";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
// import Product from "./Pages/Product/Product";
import Profile from "./Pages/Profile/Profile";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Switch>
        <Route exact path="/" component={LandPage} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        {/* <Route path="/product" component={Product} /> */}
        <Route path="/profile" component={Profile} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
