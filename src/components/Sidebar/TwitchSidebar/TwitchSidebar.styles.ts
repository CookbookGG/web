import { css } from '@emotion/react';
import Colors from '../../../styles/Colors';

const streamsContainer = css({
  padding: '20px 0 0 0',
  display: 'inline-flex',
  flexDirection: 'column',
  borderRadius: '10px',
  flexGrow: 1,
});

const streamsContainerTitle = css({
  fontWeight: 'bold',
  paddingLeft: '10px',
  paddingRight: '10px',
});

const streamItem = css({
  padding: '15px 0 15px 10px',
  display: 'flex',
  flexDirection: 'row',
  ':hover': {
    backgroundColor: Colors.backgroundDark,
  },
  borderRadius: '5px',
});

const streamerInfo = css({
  paddingLeft: '10px',
  textDecoration: 'none',
});

const streamerInfoText = css({
  textDecoration: 'none',
  color: Colors.white,
  fontWeight: 'bold',
});

export default {
  streamsContainer,
  streamItem,
  streamerInfo,
  streamerInfoText,
  streamsContainerTitle,
};
