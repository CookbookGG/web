import { css } from '@emotion/react';
import Colors from '../styles/Colors';

export default {
  swipeableView: css({
    maxHeight: '100vh',
    maxWidth: '100vw',
    backgroundColor: Colors.background,
    overflow: 'hidden',
  }),
};
