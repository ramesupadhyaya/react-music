import React from "react";
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { AlbumPage } from "./screens/album";
import { NotFoundPage } from "./screens/not-found";

const routes = (
    <Router>
        {/* <Container> */}
        <Switch>
            <Route exact path="/" component={AlbumPage} />
            <Route component={NotFoundPage} />
        </Switch>
        {/* </Container> */}
    </Router>
)

export default routes;