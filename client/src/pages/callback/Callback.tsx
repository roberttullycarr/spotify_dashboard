import * as React from 'react';
import { useHistory, useLocation } from 'react-router';
import { Location } from 'history';
import config from 'config';

interface CallbackProps {}

function Callback(props: CallbackProps) {
  const location: Location = useLocation();
  const clientId = '5f104e937ab44be8a012262b016ddd3c';
  const clientSecret = 'd04520ebc4954303a4a7e4ee60800ad9';
  const history = useHistory();
  const code = new URLSearchParams(location.search).get('code');

  const fetchTokenStart = async () => {
    const res = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Basic ' + btoa(clientId + ':' + clientSecret),
      },
      body: 'grant_type=client_credentials',
    });
    const data = await res.json();
    localStorage.setItem('token', data.access_token);
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    data.access_token ? history.push('/') : null;
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
