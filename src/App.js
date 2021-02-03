import React from 'react';
import OneSignal from 'react-onesignal';

import {
  BrowserRouter as Router,
  Switch,
  Route } from "react-router-dom";
import Home from './components/Home'
import Page from './components/Page';
import PWAPrompt from 'react-ios-pwa-prompt'
import NotFound from './components/NotFound';

OneSignal.initialize('5b3a22fc-2124-44ec-b0ab-5492c3657396', {
    safari_web_id: 'web.onesignal.auto.10d6980b-bbad-483e-b993-08fa2a289dd8'
  });

function App()  {
    return (
      <>
      <Router>
      <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/page">
        <Page />
      </Route>
      <Route default >
        <NotFound  />
      </Route>
      
    </Switch>
    </Router>
    <PWAPrompt promptOnVisit={1} timesToShow={3} copyClosePrompt="Close" permanentlyHideOnDismiss={false}/>
    </>
    )
}
export default App;