import * as React from 'react';
import App, { AppProps } from 'next/app';
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
import Colors from '../styles/Colors';

enum ParamIndex {
  COOKBOOK = 0,
  GUIDE = 1,
  SECTION = 2,
}

const init = async () => {
  let guides = [];
  let guide;
  let section;
  const cookbooks = await HttpService.get(ROUTES.COOKBOOKS);
  const cookbook = cookbooks.find(
    _cookbook => _cookbook._id === getParamId(ParamIndex.COOKBOOK)
  );

  for (const cookbook of cookbooks) {
    const _guides = await HttpService.get(ROUTES.GUIDES(cookbook._id));
    guides = guides.concat(_guides);
  }

  const guideId = getParamId(ParamIndex.GUIDE);
  const sectionId = getParamId(ParamIndex.SECTION);
  const decodedSectionId = decodeURIComponent(decodeURIComponent(sectionId));

  if (sectionId != null && guideId != null && cookbook != null) {
    guide = guides.find(guide => {
      return cookbook.guides.includes(guide._id) && guideId === guide._id;
    });
    section = guide.sections.find(_section => {
      return _section.title === decodedSectionId;
    });
  }

  useStore.setState({ cookbook, cookbooks, guides, guide, section });
};

const getParamId = (index: ParamIndex): string => {
  const pathArray = window.location.pathname.split('/');
  if (index >= 0 && pathArray[index + 1]) {
    return pathArray[index + 1];
  } else return null;
};

const EuiApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const { cookbooks } = useStore(state => state);
  React.useEffect(() => {
    init();
  }, []);

  if (cookbooks == null) return;

  return (
    <>
      <Head>
        <title>CookBook</title>
      </Head>
      <Global styles={globalStyes} />
      {/* @ts-expect-error */}
      <Theme>
        {/* @ts-expect-error */}
        <Chrome>
          <EuiErrorBoundary>
            <SwipeableView>
              <Sidebar {...pageProps} />
              <div
                css={css({
                  flexGrow: 1,
                  marginLeft: 364,
                  overflow: 'auto',
                  height: '100vh',
                  scrollbarWidth: 'auto',
                  scrollbarColor: `${Colors.text} ${Colors.backgroundDark}`,
                  '&::-webkit-scrollbar': {
                    width: 12,
                  },
                  '&::-webkit-scrollbar-track': {
                    background: Colors.backgroundDark,
                  },
                  '&::-webkit-scrollbar-thumb': {
                    backgroundColor: Colors.text,
                    borderRadius: 10,
                    border: `3px solid ${Colors.backgroundDark}`,
                  },
                })}>
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
