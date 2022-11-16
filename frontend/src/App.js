import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch, Link } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import PreviewAllSpots from "./components/PreviewAllSpots";
import CreateSpot from "./components/CreateSpot/CreateSpot"
import SpotDetails from "./components/SpotDetails/SpotDetails";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path = "/spots/:spotId">
            <SpotDetails/>
          </Route>
          <Route exact path="/">
            <PreviewAllSpots/>
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path = "/create" exact>
            <CreateSpot/>
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
