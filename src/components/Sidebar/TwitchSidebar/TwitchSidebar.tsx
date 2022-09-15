import { EuiAvatar, EuiTitle } from '@elastic/eui';

import styles from './TwitchSidebar.styles';
export interface TwitchSidebarProps {
  streamers: string[];
}

export interface StreamItemProps {
  stream: string;
  onlineStatus: string;
}

const StreamItem: React.FC<StreamItemProps> = props => {
  return (
    <li css={styles.streamItem}>
      <EuiAvatar size="m" name={props.stream[0].toUpperCase()}></EuiAvatar>
      <div css={styles.streamerInfo}>
        <a
          css={styles.streamerInfoText}
          target="_blank"
          href={`https://twitch.tv/${props.stream}`}>
          {props.stream}
        </a>
        <p>{props.onlineStatus}</p>
      </div>
    </li>
  );
};

export const TwitchSidebar: React.FC<TwitchSidebarProps> = props => {
  return (
    <div css={styles.streamsContainer}>
      <EuiTitle>
        <h1 css={styles.streamsContainerTitle}>Twitch Streams</h1>
      </EuiTitle>
      <ul>
        {props.streamers.map(streamer => (
          <StreamItem key={streamer} stream={streamer} onlineStatus="Online" />
        ))}
      </ul>
    </div>
  );
};
