import { css } from '@emotion/react';
import Colors from '../../styles/Colors';

const nav = css({
  display: 'flex',
  width: '100%',
  paddingLeft: 10,
  paddingRight: 20,
  backgroundColor: Colors.backgroundDark200,
});

const nav_item_container = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const nav_item = css({
  padding: '10px 15px',
  '& a': {
    textDecoration: 'none',
    color: Colors.white,
  },
});

const nav_item_container_right = css({
  marginLeft: 'auto',
});

const nav_logo = css({
  width: '50px',
  ':hover': {
    cursor: 'pointer',
  },
  padding: '5px 0px',
});

export default {
  nav,
  nav_item_container,
  nav_item_container_right,
  nav_item,
  nav_logo,
};
