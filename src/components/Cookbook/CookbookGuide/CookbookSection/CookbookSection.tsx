import { EuiMarkdownFormat, EuiSpacer, EuiTitle } from '@elastic/eui';
import * as React from 'react';

import { Section } from '../../../../models/Section';
import styles from './CookbookSection.styles';

interface CookbookSectionProps {
  section: Section;
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
