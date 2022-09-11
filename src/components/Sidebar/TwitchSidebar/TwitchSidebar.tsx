import { EuiAvatar, EuiTitle } from '@elastic/eui';

import styles from './TwitchSidebar.styles';
export interface TwitchSidebarProps {
  streams: Array<string>;
}

export interface StreamItemProps {
  stream: string;
  onlineStatus: string;
}

function capitalize(s) {
  return s && s[0].toUpperCase() + s.slice(1);
}

const StreamItem: React.FC<StreamItemProps> = props => {
  return (
    <li css={styles.streamItem}>
      <EuiAvatar size="m" name={capitalize(props.stream)}></EuiAvatar>
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
        <h1>Twitch Streams</h1>
      </EuiTitle>
      <ul>
        {props.streams.map(streamer => (
          <StreamItem key={streamer} stream={streamer} onlineStatus="Online" />
        ))}
      </ul>
    </div>
  );
};
