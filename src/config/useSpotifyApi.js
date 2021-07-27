import { useState, useEffect } from "react";

export const useSpotifyAuth =  () => {
  const [loginAuth, setLoginAuth] = useState([{ isAuth: false },
  ])

    useEffect(() => {
      if (window.location.hash) {
        const newAuthInfo = {
          isAuth: true,
          ...getReturnedParams(window.location.hash),
        }
        setLoginAuth(newAuthInfo);
      }
    }, [])
      return loginAuth
  }

const getReturnedParams = (hash) => {
      const stringAfterHashtag = hash.substring(1);
      const paramsInUrl = stringAfterHashtag.split("&");
      const paramsSplitUp = paramsInUrl.reduce((accumulater, currentValue) => {
        console.log(currentValue);
        const [key, value] = currentValue.split("=");
        accumulater[key] = value;
        return accumulater;
      }, {});
    
      return paramsSplitUp;
  }


