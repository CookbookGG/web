import * as React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { EuiErrorBoundary } from '@elastic/eui';
import { css, Global } from '@emotion/react';
import Chrome from '../components/chrome';
import { Theme } from '../components/theme';
import { globalStyes } from '../styles/global.styles';
import { SwipeableView } from '../components/SwipeableView';
import { Sidebar } from '../components/Sidebar/Sidebar';
import HttpService from '../utils/HttpService';
import { ROUTES } from '../constants/constants';
import { useStore } from '../store/store';
import { useRouter } from 'next/router';

const init = async pathname => {
  const cookbooks = await HttpService.get(ROUTES.COOKBOOKS);
  useStore.setState({ cookbooks });

  const cookbookId = getCookBookIdIfExists(pathname);

  if (cookbookId) {
    const cookbook = await HttpService.get(ROUTES.COOKBOOK(cookbookId));
    useStore.setState({ cookbook });
  }

  let guides = [];

  cookbooks.forEach(async cookbook => {
    const guidesInCookbook = await HttpService.get(ROUTES.GUIDES(cookbook._id));

    guides = guides.concat(guidesInCookbook);

    useStore.getState().updateGuides(guides);
  });
};

const getCookBookIdIfExists = pathname => {
  const pathArray = pathname.split('/');
  let cookbookIndex = pathArray.findIndex(path => path == 'cookbooks');
  if (cookbookIndex >= 0 && pathArray[cookbookIndex + 1]) {
    return pathArray[cookbookIndex + 1];
  } else return null;
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
    init(window.location.pathname);
  }, []);
  return (
    <>
      <Head>
        {/* You can override this in other pages - see index.tsx for an example */}
        <title>CookBook</title>
      </Head>
      <Global styles={globalStyes} />
      <Theme>
        <Chrome>
          <EuiErrorBoundary>
            <SwipeableView>
              <Sidebar {...pageProps} />
              <div css={css({ flexGrow: 1 })}>
                <Component {...pageProps} />
              </div>
            </SwipeableView>
          </EuiErrorBoundary>
        </Chrome>
      </Theme>
    </>
  );
};

export default EuiApp;
