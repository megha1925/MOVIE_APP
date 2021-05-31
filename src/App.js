import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header.js";
import Trending from "./components/pages/Trending/Trending";
import Movies from "./components/pages/Movies/Movies";
import Series from "./components/pages/Series/Series";
import Search from "./components/pages/Search/Search";
import "./App.css";
import SimpleBottomNavigation from "./components/MainNav.js";
import { Container } from "@material-ui/core";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
        <Container>
          <Switch>
            <Route path="/" component={Trending} exact></Route>
            <Route path="/movies" component={Movies}></Route>
            <Route path="/series" component={Series}></Route>
            <Route path="/search" component={Search}></Route>
          </Switch>
        </Container>
      </div>
      <SimpleBottomNavigation />
    </BrowserRouter>
  );
};

export default App;
