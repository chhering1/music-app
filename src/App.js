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

OneSignal.initialize('8a753e99-73aa-4f8f-8770-55e767c8e733', {
    safari_web_id: 'web.onesignal.auto.1a1cd43f-104c-4ac2-b069-e07775f1eeb9'
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