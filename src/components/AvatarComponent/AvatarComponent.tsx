import { EuiAvatar } from '@elastic/eui';
import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from 'react';

import styles from './AvatarComponent.styles';

interface AvatarComponentProps {
  name: string;
  avatarSize: 's' | 'm' | 'l' | 'xl';
  avatarImage?: string;
  children: React.ReactNode;
}

const AvatarComponent: React.FC<AvatarComponentProps> = props => {
  return (
    <div css={styles.container}>
      <EuiAvatar
        size={props.avatarSize}
        name={props.name}
        imageUrl={props.avatarImage}></EuiAvatar>
      <div css={styles.infoContainer}>{props.children}</div>
    </div>
  );
};

export default AvatarComponent;
