import * as React from 'react';
import { EuiIcon, EuiMarkdownFormat, EuiSpacer, EuiTitle } from '@elastic/eui';

import styles from './CookbookSection.styles';
import { Section } from '../../../../models/Section';
import Router, { useRouter } from 'next/router';

enum NavDirection {
  Left = 0,
  Right = 1,
}

interface CookbookSectionNavigatorProps {
  section: Section;
  direction: NavDirection;
}

interface CookbookSectionProps {
  section: Section;
  prevSection: Section;
  nextSection: Section;
}

const onNavigateClick = (e: React.MouseEvent, section: Section) => {
  e.preventDefault();

  // const router = useRouter();

  const { cookbookId, guideId } = Router.query;

  Router.push(`/${cookbookId}/${guideId}/${section.title}`);
};

const CookbookSectionNavigator: React.FC<CookbookSectionNavigatorProps> = ({
  section,
  direction,
}) => {
  const navigationText =
    direction === NavDirection.Left
      ? 'Go To Previous Section'
      : 'Go To Next Section';
  const navigationIcon =
    direction === NavDirection.Left ? 'arrowLeft' : 'arrowRight';

  return (
    <div css={styles.navItem} onClick={e => onNavigateClick(e, section)}>
      {direction === NavDirection.Left ? (
        <EuiIcon type={navigationIcon} size="m" />
      ) : (
        <></>
      )}
      <div>
        <p>{navigationText}</p>
        <p>{section.title}</p>
      </div>
      {direction === NavDirection.Right ? (
        <EuiIcon type={navigationIcon} size="m" />
      ) : (
        <></>
      )}
    </div>
  );
};

export const CookbookSection: React.FC<CookbookSectionProps> = ({
  section,
  prevSection,
  nextSection,
}) => {
  return (
    <div css={styles.container}>
      <EuiTitle>
        <h2>{section.title}</h2>
      </EuiTitle>
      <EuiSpacer />
      <EuiMarkdownFormat>{section.body}</EuiMarkdownFormat>
      <div css={styles.navContainer}>
        {prevSection ? (
          <CookbookSectionNavigator
            section={prevSection}
            direction={NavDirection.Left}
          />
        ) : (
          // Empty div to force nextSection on the right. Could be done in CSS but UGHHHHHHH
          <div></div>
        )}
        {nextSection && (
          <CookbookSectionNavigator
            section={nextSection}
            direction={NavDirection.Right}
          />
        )}
      </div>
    </div>
  );
};
