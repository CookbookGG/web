import { css } from '@emotion/react';

const container = css({
  display: 'flex',
  flexDirection: 'column',
  padding: '20px 16vh 0 16vh',
  width: '100%',
});

const titleText = css({
  textAlign: 'center',
});

const content = css({
  width: '100%',
  display: 'flex',
  paddingTop: '48px',
});

const contentItem = css({
  padding: '24px',
});

const glossaryItem = css({
  paddingTop: '8px',
});

export default {
  container,
  titleText,
  content,
  contentItem,
  glossaryItem,
};
