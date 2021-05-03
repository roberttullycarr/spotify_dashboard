import { Router } from 'react-router-dom';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { History } from 'history';

import defaultHistory from 'custom-history';
import { theme as defaultTheme, GlobalStyle } from 'theme';
import defaultQueryClient from 'queryClient';

interface AppProviderProps {
  children: React.ReactNode;
  history?: History<unknown>;
  theme?: DefaultTheme;
  storeConfig?: any;
  queryClient?: QueryClient;
}

function AppProviders(props: AppProviderProps) {
  const {
    children,
    theme = defaultTheme,
    history = defaultHistory,
    queryClient = defaultQueryClient,
  } = props;

  return (
    <Router history={history}>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <GlobalStyle />
          {children}
          <ReactQueryDevtools position="bottom-right" />
        </QueryClientProvider>
      </ThemeProvider>
    </Router>
  );
}

export type { AppProviderProps };
export default AppProviders;
