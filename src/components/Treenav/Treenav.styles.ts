import { css } from '@emotion/react';
import Colors from '../../styles/Colors';

const treeNav = css({
  padding: 4,
  paddingTop: 8,
  overflow: 'hidden',
  color: Colors.text,
  '&:hover': {
    overflow: 'auto',
  },
  scrollbarWidth: 'auto',
  scrollbarColor: `${Colors.text} ${Colors.backgroundDark}`,

  '&::-webkit-scrollbar': {
    width: 12,
  },
  '&::-webkit-scrollbar-track': {
    background: Colors.backgroundDark,
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: Colors.text,
    borderRadius: 10,
    border: `3px solid ${Colors.backgroundDark}`,
  },
});

const nav = css({
  cursor: 'pointer',
  padding: 8,
  borderRadius: 4,
  fontSize: 16,
  display: 'flex',
  alignItems: 'center',
  '&:hover': {
    color: Colors.white,
    backgroundColor: Colors.backgroundAccent,
  },
});

const icon = css({
  marginRight: 8,
});

const guide = css({
  width: '100%',
});

const item = css({
  padding: '0 8px',
  height: 32,
  borderRadius: 4,
  fontSize: 16,
  display: 'flex',
  alignItems: 'center',
  lineHeight: '1.5',
});

const itemInner = css({
  padding: '0 8px',
  height: 32,
  borderRadius: 4,
  fontSize: 16,
  display: 'flex',
  alignItems: 'center',
  lineHeight: '1.5',
  marginLeft: 24,
  '&:hover': {
    color: Colors.white,
    backgroundColor: Colors.backgroundAccent,
  },
});

const title = css({
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: 'inline',
});

const addSection = css({});

const droppable = css({
  backgroundColor: 'transparent !important',
});

export default {
  treeNav,
  nav,
  icon,
  droppable,
  item,
  title,
  itemInner,
  guide,
};
