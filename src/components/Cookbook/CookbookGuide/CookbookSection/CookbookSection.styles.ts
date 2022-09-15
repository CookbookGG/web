import { css } from '@emotion/react';
import Colors from '../../../../styles/Colors';

const container = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  margin: 'auto',
  padding: '20px 200px 20px 200px',
});

const markdownContainer = css({
  table: {
    display: 'table !important',
    th: {
      backgroundColor: Colors.backgroundDark,
    },
    borderTop: 'solid',
    borderWidth: '1px',
    td: {
      borderTop: 'solid',
      borderWidth: '1px',
    },
  },
  div: {
    width: '100%',
    padding: '6px',
    display: 'flex',
  },
});

export default {
  container,
  markdownContainer,
};
