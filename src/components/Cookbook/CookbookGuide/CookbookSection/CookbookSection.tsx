import * as React from 'react';
import {
  EuiDragDropContext,
  euiDragDropReorder,
  EuiDroppable,
  EuiIcon,
  EuiMarkdownFormat,
  EuiSpacer,
  EuiText,
  EuiTitle,
} from '@elastic/eui';

import { useStore } from '../../../../store/store';
import { useRouter } from 'next/router';
import styles from './CookbookSection.styles';

interface CookbookSectionProps {
  title: any;
  body: any;
}

export const CookbookSection: React.FC<CookbookSectionProps> = ({
  title,
  body,
}) => {
  const { user } = useStore(state => state);
  const router = useRouter();

  return (
    <>
      <EuiTitle>
        <h2>{title}</h2>
      </EuiTitle>
      <EuiSpacer />
      <EuiMarkdownFormat>{body}</EuiMarkdownFormat>
    </>
  );
};
