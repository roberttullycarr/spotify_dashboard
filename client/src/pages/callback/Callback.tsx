import * as React from 'react';
import { useHistory, useLocation } from 'react-router';
import { Location } from 'history';
import config from 'config';

interface CallbackProps {}

function Callback(props: CallbackProps) {
  const location: Location = useLocation();
  const code = new URLSearchParams(location.search).get('code');
  const history = useHistory();

  const fetchTokenStart = async () => {
    const res = await fetch(`http://localhost:8080/callback/${code}`);
    const data = await res.json();
    localStorage.setItem('access', data.access_token);
    localStorage.setItem('refresh', data.refresh_token);
    history.push('/');
  };

  React.useEffect(() => {
    // debugger;

    if (code && typeof code === 'string') {
      // We have a code in the callback url, try to get the access token by dispatching the fetchTokenStart action
      fetchTokenStart();
    } else {
      // Something went wrong with the callback, redirect back to the API auth page.
      window.location.assign(config.API_BASE);
    }
  }, [code]);

  return null;
}

export default Callback;
