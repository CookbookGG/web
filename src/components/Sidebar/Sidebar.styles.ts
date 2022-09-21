import { css } from '@emotion/react';
import Colors from '../../styles/Colors';

const sidebar = css({
  //position: 'absolute',
  // IIRC @Steffan mentioned don't remove this, but i dont understand why and it makes the layouts more difficult rn
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
  width: 64,
  height: '100vh',
  paddingTop: 8,
});

const logo = css({
  width: 36,
  height: 36,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '8px 0',
  cursor: 'pointer',
});

const spacer = css({
  width: '65%',
  height: 2,
  backgroundColor: Colors.backgroundAccent,
  margin: '4px 0',
});

const cookbook = css({
  width: 36,
  height: 36,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '8px 0',
  filter: `grayscale(100%)`,
  cursor: 'pointer',
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
  logo,
  spacer,
};
