import * as React from 'react';
import { useSwipeable } from 'react-swipeable';
import { IStore, useStore } from '../../store/store';
import styles from './SwipeableView.styles';

export const SwipeableView = ({ children }: any) => {
  const { swipeLeft, swipeRight } = useStore((state: IStore) => state);
  const handlers = useSwipeable({
    onSwipedLeft: swipeLeft,
    onSwipedRight: swipeRight,
    delta: 1,
  });

  return (
    <div {...handlers} css={styles.swipeableView}>
      {children}
    </div>
  );
};
