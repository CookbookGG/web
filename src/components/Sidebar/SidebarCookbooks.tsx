import Link from 'next/link';
import * as React from 'react';
import { useStore } from '../../store/store';
import logo from '../../images/logo.svg';
import Image from 'next/image';
import { Cookbook } from '../../models/Cookbook';
import styles from './Sidebar.styles';
import { MELEE } from '../../constants/melee_icons';
import { EuiSpacer } from '@elastic/eui';
import { imageLoader } from '../../lib/loader';

const Cookbook = ({ cookbook }: { cookbook: Cookbook }) => {
  const _cookbook = useStore(state => state.cookbook);

  return (
    <Link href={`/cookbooks/${cookbook._id}`} passHref>
      <div
        css={styles.cookbook}
        style={
          _cookbook?._id === cookbook._id ? { filter: 'grayscale(0%)' } : {}
        }>
        <Image
          src={MELEE[cookbook.name] || MELEE.fox}
          alt={cookbook.name}
          loader={imageLoader}
        />
      </div>
    </Link>
  );
};

export const SidebarCookbooks: React.FC = () => {
  const cookbooks = useStore(state => state.cookbooks);

  return (
    <div css={styles.cookbooks}>
      <div css={styles.logo}>
        <Image src={logo} alt="" css={styles.logo} loader={imageLoader} />
      </div>
      <EuiSpacer css={styles.spacer} size="xs" />
      {cookbooks.map((cb, i) => (
        <Cookbook key={i} cookbook={cb} />
      ))}
    </div>
  );
};
