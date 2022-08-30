import * as React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { EuiErrorBoundary } from '@elastic/eui';
import { Global } from '@emotion/react';
import Chrome from '../components/chrome';
import { Theme } from '../components/theme';
import { globalStyes } from '../styles/global.styles';
import { SwipeableView } from '../components/SwipeableView';
import { Sidebar } from '../components/Sidebar/Sidebar';
import HttpService from '../utils/HttpService';
import { ROUTES } from '../constants/constants';
import { useStore } from '../store/store';

const init = async () => {
  const cookbooks = await HttpService.get(ROUTES.COOKBOOKS);
  useStore.setState({ cookbooks });
};

/**
 * Next.js uses the App component to initialize pages. You can override it
 * and control the page initialization. Here use use it to render the
 * `Chrome` component on each page, and apply an error boundary.
 *
 * @see https://nextjs.org/docs/advanced-features/custom-app
 */
const EuiApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  React.useEffect(() => {
    init();
  }, []);
  return (
    <>
      <Head>
        {/* You can override this in other pages - see index.tsx for an example */}
        <title>Next.js EUI Starter</title>
      </Head>
      <Global styles={globalStyes} />
      <Theme>
        <Chrome>
          <EuiErrorBoundary>
            <SwipeableView>
              <Sidebar {...pageProps} />
              <Component {...pageProps} />
            </SwipeableView>
          </EuiErrorBoundary>
        </Chrome>
      </Theme>
    </>
  );
};

export default EuiApp;
