import client from './api-client';

// Typing can be better here.
function fetchTokens(code: string) {
  return client.get<any>('/callback', { params: { code } });
}

export { fetchTokens };
