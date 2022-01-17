import React from "react";
import About from "./components/About/About.jsx";
import Header from "./components/Header/Header.jsx";
import Players from "./components/Players/Players.jsx";
import CreatePlayer from "./components/CreatePlayer/CreatePlayer.jsx";
import { Route } from "react-router-dom";
//import "./stylesheets/App.scss";

function App() {
  const routes = ["/", "/about", "/add"];
  return (
    <>
      <Header />
    <div className="App">
      <Route exact path={routes[0]} component={Players} />
      <Route path={routes[1]} component={About} />
      <Route path={routes[2]} component={CreatePlayer} />
    </div>
    </>
  
  );
}

export default App;
