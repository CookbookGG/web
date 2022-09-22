import { css } from '@emotion/react';
import Colors from '../../styles/Colors';

const container = css({
  padding: '15px 10px 15px 10px',
  display: 'flex',
  flexDirection: 'row',
  ':hover': {
    backgroundColor: Colors.backgroundDark,
  },
  borderRadius: '5px',
  alignItems: 'center',
});

const infoContainer = css({
  paddingLeft: '10px',
  textDecoration: 'none',
});

export default {
  container,
  infoContainer,
};
