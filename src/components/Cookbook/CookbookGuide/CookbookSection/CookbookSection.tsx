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
import { SectionModel } from '../../../../models/Section';

interface CookbookSectionProps {
  section: SectionModel;
}

export const CookbookSection: React.FC<CookbookSectionProps> = ({
  section,
}) => {
  return (
    <div css={styles.container}>
      <EuiTitle>
        <h2>{section.title}</h2>
      </EuiTitle>
      <EuiSpacer />
      <EuiMarkdownFormat>{section.body}</EuiMarkdownFormat>
    </div>
  );
};
