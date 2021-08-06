import './App.css';
import Home from './pages/Home';
import CreatePlaylist from './pages/CreatePlaylist';
import Navbar from './components/Layout/Navbar';
import Sidebar from './components/Layout/Sidebar';
import WelcomePage from './pages/Welcome';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import { useSelector } from 'react-redux';
import { ChakraProvider } from "@chakra-ui/react"




function App() {
  const { isAuthenticated } = useSelector(state => state.userAuth)

  return (
    <div className="App">
      <BrowserRouter>
          { isAuthenticated ?
          <>
            <Navbar />      
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
          </>      
            :
            <ChakraProvider>
              <div className="welcome">
                <Switch>
                    <Route path="/">
                        <WelcomePage />
                    </Route>
                </Switch>
              </div>
            </ChakraProvider> 
            }              
      </BrowserRouter>
  </div>
  );
}

export default App;
