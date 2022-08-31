import { css } from '@emotion/react';
import Colors from '../../styles/Colors';

const sidebar = css({
  width: 500,
  height: '100vh',
  display: 'flex',
});

const sidebarSections = css({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: Colors.backgroundDark,
  width: 300,
  height: '100%',
  padding: 8,
});

const cookbooks = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: Colors.backgroundDark200,
  width: 72,
  height: '100%',
  paddingTop: 8,
});

const cookbook = css({
  width: 48,
  height: 48,
  borderRadius: '50%',
  backgroundColor: Colors.backgroundAccent,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '4px 0',
});

const sidebarHeader = css({
  width: '100%',
  borderRadius: 4,
});

const sidebarContent = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  marginTop: 4,
  overflow: 'hidden',
});

export default {
  sidebar,
  sidebarHeader,
  sidebarContent,
  sidebarSections,
  cookbooks,
  cookbook,
};
