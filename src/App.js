import './App.css';
import Home from './pages/Home';
import CreatePlaylist from './pages/CreatePlaylist';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
          <div className="header">
            <Navbar />
          </div>
          <div className="body">
            <div className="sidebar">
              <Sidebar />
            </div>
            <div className="content">
            <Switch>
              <PrivateRoute exact path="/create-playlist">
                <CreatePlaylist />
              </PrivateRoute>
              <Route path='/' >
                <Home />
              </Route>
            </Switch>
            </div>
          </div>
      </BrowserRouter>
  </div>
  );
}

export default App;
