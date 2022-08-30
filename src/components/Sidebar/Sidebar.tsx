import * as React from 'react';
import styles from './Sidebar.styles';
import { SidebarCookbooks } from './SidebarCookbooks';
import { SidebarMain } from './SidebarMain';

export const Sidebar: React.FC = () => {
  return (
    <div css={styles.sidebar}>
      <SidebarCookbooks />
      <SidebarMain />
    </div>
  );
};
