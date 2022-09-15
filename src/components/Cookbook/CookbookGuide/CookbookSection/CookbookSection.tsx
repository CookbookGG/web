import * as React from 'react';
import { EuiMarkdownFormat, EuiSpacer, EuiTitle } from '@elastic/eui';

import styles from './CookbookSection.styles';
import { Section } from '../../../../models/Section';

/* Plugins */
import { parsingList, processingList } from '../../../../plugins';

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
      <EuiMarkdownFormat
        css={styles.markdownContainer}
        parsingPluginList={parsingList}
        processingPluginList={processingList}>
        {section.body}
      </EuiMarkdownFormat>
    </div>
  );
};
