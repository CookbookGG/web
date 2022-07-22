import { useEuiTheme } from '@elastic/eui';
import * as React from 'react';
import useStyles from '../../hooks/useStyles';
import styles from './Sidebar.styles';

const Cookbook = ({ cookbook }: { cookbook: any }) => {
  const _styles = useStyles(styles);
  return <div css={_styles.cookbook}>{cookbook.name}</div>;
};

export const SidebarCookbooks: React.FC = () => {
  const _styles = useStyles(styles);
  const cookbooks = [{ name: 'falcon' }];

  return (
    <div css={_styles.cookbooks}>
      {cookbooks.map((cb, i) => (
        <Cookbook key={i} cookbook={cb} />
      ))}
    </div>
  );
};
