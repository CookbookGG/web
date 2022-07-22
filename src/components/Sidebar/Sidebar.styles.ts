import { css } from '@emotion/react';
import Colors from '../../styles/Colors';

const sidebar = css({
  position: 'absolute',
  width: 500,
  height: '100vh',
  display: 'flex',
});

const sidebarSections = css({
  display: 'flex',
  flexDirection: 'column',
  padding: 16,
  backgroundColor: Colors.backgroundDark,
  width: 300,
  height: '100%',
  borderTopLeftRadius: 8,
  borderBottomLeftRadius: 8,
  marginLeft: 8,
});

const cookbooks = css({
  display: 'flex',
  flexDirection: 'column',
  padding: 16,
  backgroundColor: Colors.backgroundDark200,
  width: 84,
  height: '100%',
  borderTopRightRadius: 8,
  borderBottomRightRadius: 8,
});

export default euiTheme => ({
  sidebar,
  sidebarSections,
  cookbooks,
  cookbook: css({
    width: 48,
    height: 48,
    borderRadius: 10,
    backgroundColor: Colors.backgroundAccent,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }),
});
