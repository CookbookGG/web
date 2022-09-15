import { css } from '@emotion/react';
import Colors from '../../../../styles/Colors';

const container = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px 200px 0px 200px',
});

const navContainer = css({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '100%',
});

const navItem = css({
  display: 'flex',
  marginTop: '32px',
  marginBottom: '32px',
  padding: '4px',
  borderRadius: '4px',
  alignItems: 'center',
  ':hover': {
    backgroundColor: Colors.backgroundAccent,
    cursor: 'pointer',
  },
  p: {
    padding: '8px',
  },
});

export default {
  container,
  navContainer,
  navItem,
};
