import * as React from 'react';
import { EuiMarkdownFormat, EuiSpacer, EuiTitle } from '@elastic/eui';

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
