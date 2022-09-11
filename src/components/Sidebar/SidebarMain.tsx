import * as React from 'react';
import { useStore } from '../../store/store';
import { Treenav } from '../Treenav/Treenav';
import styles from './Sidebar.styles';

export const SidebarMain: React.FC = () => {
  const cookbook = useStore(state => state.cookbook);

  return (
    <div css={styles.sidebarSections}>
      <div css={styles.sidebarHeader}>
        {cookbook?.banner_url && (
          <img
            css={styles.sidebarHeader}
            src={cookbook.banner_url}
            alt="Cookbook Banner"
          />
        )}
      </div>
      <div css={styles.sidebarContent}>
        <Treenav />
      </div>
    </div>
  );
};
