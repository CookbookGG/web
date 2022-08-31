import * as React from 'react';
import {
  EuiDragDropContext,
  euiDragDropReorder,
  EuiDroppable,
  EuiIcon,
  EuiText,
} from '@elastic/eui';

import { useStore } from '../../../../store/store';
import { useRouter } from 'next/router';
import styles from './CookbookSection.styles';

interface CookbookSectionProps {
  title;
  body;
}

export const CookbookSection: React.FC<CookbookSectionProps> = ({
  title,
  body,
}) => {
  const { user } = useStore(state => state);
  const router = useRouter();

  return (
    <>
      <EuiText>Title: {title}</EuiText>
      <EuiText>Body: {body}</EuiText>
    </>
  );
};
