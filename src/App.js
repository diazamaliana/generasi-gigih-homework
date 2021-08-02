import './App.css';
import Home from './pages/Home';
import CreatePlaylist from './pages/CreatePlaylist';
import Navbar from './components/Layout/Navbar';
import Sidebar from './components/Layout/Sidebar';
import WelcomePage from './pages/Welcome';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import { useSelector } from 'react-redux'



function App() {
  const { isAuthenticated } = useSelector(state => state.userAuth)

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
          { isAuthenticated ?      
            <div className="wrapper">
              <aside className="sidebar">
                <Sidebar />
              </aside>
              <main>
                  <Switch>
                    <PrivateRoute component={CreatePlaylist} path="/create-playlist" exact />
                    <PrivateRoute component={Home} path="/home" exact />
                  </Switch>
              </main>
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
