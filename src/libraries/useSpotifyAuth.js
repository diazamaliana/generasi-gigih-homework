import { useEffect } from "react";
import { getProfile } from "./apiSpotify";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import { login, storeUser } from "../redux/store/userAuth";

export const useSpotifyAuth =  () => {
  const { isAuthenticated, accessToken, user } = useSelector(state => state.userAuth)
  const dispatch = useDispatch();
  const history = useHistory();
  
    useEffect(() => {
      if (!isAuthenticated && window.location.hash) {
        const paramsInUrl = window.location.hash.substr(1).split('&')
        paramsInUrl.forEach(paramsSplitUp => {
          const [key, value] = paramsSplitUp.split('=')
          if (key === 'access_token') dispatch(login(value))
        })
      }
      if (isAuthenticated && Object.keys(user).length === 0) {
        getProfile(accessToken).then(user => {
          dispatch(storeUser(user))
          history.push('/create-playlist')
        })
      }
    }, [isAuthenticated, accessToken, user, history, dispatch])
  
    return useSelector(state => state.userAuth)
}

// const getReturnedParams = (hash) => {
//       const stringAfterHashtag = hash.substring(1);
//       const paramsInUrl = stringAfterHashtag.split("&");
//       const paramsSplitUp = paramsInUrl.reduce((accumulater, currentValue) => {
//         console.log(currentValue);
//         const [key, value] = currentValue.split("=");
//         accumulater[key] = value;
//         return accumulater;
//       }, {});
    
//       return paramsSplitUp;
//   }
