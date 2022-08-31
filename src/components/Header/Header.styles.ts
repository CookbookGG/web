import { css } from '@emotion/react';
import Colors from '../../styles/Colors';

const header = css({
  padding: 4,
  paddingTop: 8,
  overflow: 'auto',
});

const logoContainer = css({
  width: '50px',
  height: '50px',
  padding: 4,
  ':hover': {
    cursor: 'pointer',
  },
});

const rightSection = css({
  paddingRight: 12,
});

const leftSection = css({
  paddingInline: 12,

  a: {
    textDecoration: 'none',
    textDecorationLine: 'none',
    color: Colors.white,
  },
});

export default {
  header,
  logoContainer,
  rightSection,
  leftSection,
};
