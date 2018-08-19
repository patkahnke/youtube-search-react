import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import AssignSearchWords from "./AssignSearchWords";
import Favorites from "./Favorites";
import FavoritesSearch from "./FavoritesSearch";
import Youtube from "./Youtube";
import YoutubeSearch from "./YoutubeSearch";
import NotFound from "./NotFound";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default Router;
