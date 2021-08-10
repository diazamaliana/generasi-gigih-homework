import './App.css';
import Home from './pages/Home';
import CreatePlaylist from './pages/CreatePlaylist';
import WelcomePage from './pages/Welcome';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import { useSelector } from 'react-redux';
import { ChakraProvider } from "@chakra-ui/react"
import theme from './theme'
import SidebarWithHeader from './components/Layout/Sidebar';


function App() {
  const { isAuthenticated } = useSelector(state => state.userAuth)

  return (
    <ChakraProvider theme={theme}>
      <div className="App">
        <BrowserRouter>
            { isAuthenticated ?
            <>
              <SidebarWithHeader>
                <main>
                    <Switch>
                      <PrivateRoute component={CreatePlaylist} path="/create-playlist" exact />
                      <PrivateRoute component={Home} path="/home" exact />
                    </Switch>
                </main>
              </SidebarWithHeader>
            </>      
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
    </ChakraProvider>
    
  );
}

export default App;
