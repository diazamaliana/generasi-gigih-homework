import { Redirect, Route } from "react-router";
import { useSelector } from 'react-redux'

const PrivateRoute = ({ children, fallbackUrl = "/", ...props }) => {
    const { isAuthenticated } = useSelector(state => state.userAuth)
    return (
      <Route
        {...props}
        render={({ location }) =>
          isAuthenticated ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: fallbackUrl,
                state: { from: location },
              }}
            />
          )
        }
      />
    );
  };
  
  export default PrivateRoute;
  