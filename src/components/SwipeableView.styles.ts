import { css } from '@emotion/react';
import Colors from '../styles/Colors';

export default euiTheme => ({
  swipeableView: css({
    height: '100vh',
    width: '100vw',
    backgroundColor: Colors.background,
  }),
});
