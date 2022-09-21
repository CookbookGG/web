import * as React from 'react';
import { User } from '../../../models/User';
import styles from './ChefSidebar.styles';

interface ChefSideBarProps {
  users: User[];
}

export const ChefSidebar: React.FC<ChefSideBarProps> = () => {
  return (
    <div css={styles.sidebar}>
      <SidebarCookbooks />
      <SidebarMain />
    </div>
  );
};
