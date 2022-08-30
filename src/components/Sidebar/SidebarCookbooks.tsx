import Link from 'next/link';
import * as React from 'react';
import { useStore } from '../../store/store';
import styles from './Sidebar.styles';

const Cookbook = ({ cookbook }: { cookbook: any }) => {
  return (
    <Link href={`/cookbooks/${cookbook._id}`}>
      <div css={styles.cookbook}>{cookbook.name}</div>
    </Link>
  );
};

export const SidebarCookbooks: React.FC = () => {
  const cookbooks = useStore(state => state.cookbooks);

  return (
    <div css={styles.cookbooks}>
      {cookbooks.map((cb, i) => (
        <Cookbook key={i} cookbook={cb} />
      ))}
    </div>
  );
};
