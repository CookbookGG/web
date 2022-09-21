import { EuiTitle } from '@elastic/eui';
import * as React from 'react';
import { User } from '../../models/User';
import { ChefSidebar } from '../Sidebar/ChefSidebar/ChefSidebar';
import styles from './CookbookHome.styles';
interface CookbookHomeProps {
  chefs: User[];
}

export const CookbookHome: React.FC<CookbookHomeProps> = ({ chefs }) => {
  return (
    <div css={styles.container}>
      <EuiTitle
        css={styles.titleText}
        size="l"
        children={<h1>Welcome to the Cookbook!</h1>}
      />

      <div css={styles.content}>
        {chefs.map(chef => {
          return <p>{chef.username}</p>;
        })}
      </div>
    </div>
  );
};
