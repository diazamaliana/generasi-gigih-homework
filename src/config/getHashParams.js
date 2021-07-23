const callback = () => {
  const getHashParams = {};
    const r = /([^&;=]+)=?([^&;]*)/g;
    const q = window.location.hash.substring(1);
    let e = r.exec(q);
    while (e) {
      getHashParams[e[1]] = decodeURIComponent(e[2]);
      e = r.exec(q);
    }
  return getHashParams.access_token && getHashParams;
};

export { callback };