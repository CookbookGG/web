import { EuiAvatar, EuiTitle } from '@elastic/eui';
import { DISCORD } from '../../../constants/constants';
import { User } from '../../../models/User';
import AvatarComponent from '../../AvatarComponent/AvatarComponent';

import styles from './ChefSidebar.styles';
export interface ChefSidebarProps {
  chefs: User[];
}

export interface StreamItemProps {
  chef: User;
}

const ChefItem: React.FC<StreamItemProps> = props => {
  return (
    <li>
      <AvatarComponent
        avatarSize="l"
        name={props.chef.username}
        avatarImage={DISCORD.getAvatarUrl(
          props.chef.discord_id,
          props.chef.avatar
        )}>
        <p>{props.chef.username}</p>
      </AvatarComponent>
    </li>
  );
};

export const ChefSidebar: React.FC<ChefSidebarProps> = props => {
  return (
    <ul css={styles.chefsContainer}>
      {props.chefs.map(chef => (
        <ChefItem key={chef.username} chef={chef} />
      ))}
    </ul>
  );
};
