import React from 'react';
import './App.css';
import Home from './components/home'
import Player from './components/player'
import SongList from './components/songList'
import {HashRouter as Router,Route,Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
     <Router>
       <Switch>
         <Route path='/songList' component={SongList}></Route>
         <Route path='/player' component={Player}></Route>
         <Route path='/' component={Home}></Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
