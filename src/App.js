import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Contact from "./screens/contact/contact";
import AboutMe from "./screens/aboutme/aboutme";
import MyWork from "./screens/mywork";

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Redirect from='/' to='/aboutme' exact />
        <Route path="/aboutme" component={AboutMe} />
        <Route path="/mywork" component={MyWork} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
