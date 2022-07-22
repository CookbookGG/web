import { useEuiTheme } from '@elastic/eui';
import * as React from 'react';
import { useSwipeable } from 'react-swipeable';
import useStyles from '../hooks/useStyles';
import { IStore, useStore } from '../store/store';
import styles from './SwipeableView.styles';

export const SwipeableView: React.FC = ({ children }) => {
  const _styles = useStyles(styles);
  const { swipeLeft, swipeRight } = useStore((state: IStore) => state);
  const handlers = useSwipeable({
    onSwipedLeft: swipeLeft,
    onSwipedRight: swipeRight,
    delta: 1,
  });

  return (
    <div {...handlers} css={_styles.swipeableView}>
      {children}
    </div>
  );
};
