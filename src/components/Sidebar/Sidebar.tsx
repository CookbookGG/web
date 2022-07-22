import * as React from 'react';
import useStyles from '../../hooks/useStyles';
import styles from './Sidebar.styles';
import { SidebarCookbooks } from './SidebarCookbooks';

export const Sidebar: React.FC = () => {
  const _styles = useStyles(styles);

  return (
    <div css={_styles.sidebar}>
      <SidebarCookbooks />
      <div css={_styles.sidebarSections}></div>
    </div>
  );
};
