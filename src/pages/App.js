import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {
  Initial,
  ChooseGame,
  ChooseCharacter,
  Main
} from '@/pages';

import AdminChooseGame from './AdminChooseGame/AdminChooseGame';
import AdminMain from './AdminMain/AdminMain';

function App() {
  return (
    <Router>
      <Route exact path="/">
        <Initial />
      </Route>
      <Route exact path="/game">
        <ChooseGame />
      </Route>
      <Route exact path="/character">
        <ChooseCharacter />
      </Route>
      <Route exact path="/main">
        <Main />
      </Route>
      <Route exact path="/admin/game">
        <AdminChooseGame />
      </Route>
      <Route exact path="/admin/main">
        <AdminMain />
      </Route>
    </Router>
  );
}

export default App;
