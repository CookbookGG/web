import { css } from '@emotion/react';
import Colors from '../../../styles/Colors';

const streamsContainer = css({
  marginLeft: '500px',
  backgroundColor: Colors.backgroundAccent,
  padding: '20px',
  display: 'inline-flex',
  flexDirection: 'column',
  borderRadius: '10px',
});

const streamItem = css({
  padding: '20px 0 10px 0',
  display: 'flex',
  flexDirection: 'row',
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
};
