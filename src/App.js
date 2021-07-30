import './App.css';
import Home from './pages/Home';
import CreatePlaylist from './pages/CreatePlaylist';
import Navbar from './components/Layout/Navbar';
import Sidebar from './components/Layout/Sidebar';
import WelcomePage from './pages/Welcome';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'



function App() {
  const { isAuthenticated } = useSelector(state => state.userAuth)

  return (
    <div className="App">
      <BrowserRouter>
          <div className="header">
            <Navbar />
          </div>
          { isAuthenticated ?      
            <div className="body">
                <div className="sidebar">
                  <Sidebar />
                </div>
                <div className="content">
                  <Switch>
                    <Route path="/create-playlist">
                        <CreatePlaylist />
                    </Route>
                    <Route path="/home">
                        <Home />
                    </Route>
                  </Switch>
                </div>
            </div>
            :
            <div className="welcome">
                <Switch>
                    <Route path="/">
                        <WelcomePage />
                    </Route>
                </Switch>
            </div>
            }              
      </BrowserRouter>
  </div>
  );
}

export default App;
