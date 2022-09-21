import { css } from '@emotion/react';

const container = css({
  display: 'flex',
  flexDirection: 'column',
  paddingTop: '20px',
  width: '100%',
});

const titleText = css({
  textAlign: 'center',
});

const content = css({
  width: '100%',
});

export default {
  container,
  titleText,
  content,
};
