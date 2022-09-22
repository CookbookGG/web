import { EuiAvatar, EuiText, EuiTitle } from '@elastic/eui';
import * as React from 'react';
import { User } from '../../models/User';
import AvatarComponent from '../AvatarComponent/AvatarComponent';
import { ChefSidebar } from '../Sidebar/ChefSidebar/ChefSidebar';
import styles from './CookbookHome.styles';
interface CookbookHomeProps {
  chefs: User[];
}

const glossary = [
  {
    word: 'Chef',
    text: 'Someone who contributes content to the website, be it a creator or just adding text from other sources',
  },
  {
    word: 'Cookbook',
    text: 'Guides and information regarding one particular character in SSBM',
  },
  {
    word: 'Guide',
    text: 'A category which can contain different subsections of information. For example "Movement"',
  },
  {
    word: 'Section',
    text: 'Where most information is stored, this is where you will read most content on this site. A section always follows under a guide. Under "Movement", an example section could be "Wavedashing 101"',
  },
  {
    word: 'Post',
    text: 'May be seen as a non-categorized section. These are present on the Home tab of all cookbooks, and are simply some sort of information which does not fit in to a particular category',
  },
];

export const CookbookHome: React.FC<CookbookHomeProps> = ({ chefs }) => {
  return (
    <div css={styles.container}>
      <EuiTitle size="l" css={styles.titleText}>
        <h1>Welcome to the Cookbook!</h1>
      </EuiTitle>

      <div css={styles.content}>
        <div css={styles.contentItem}>
          <EuiTitle size="s">
            <h2>How to use Cookbook.gg</h2>
          </EuiTitle>
          <EuiText>
            Beep boop loads of stuff about this beautiful cookbook oh wow isnt
            this cookbook great hello hello! Beep boop loads of stuff about this
            beautiful cookbook oh wow isnt this cookbook great hello hello!Beep
            boop loads of stuff about this beautiful cookbook oh wow isnt this
            cookbook great hello hello!Beep boop loads of stuff about this
            beautiful cookbook oh wow isnt this cookbook great hello hello!Beep
            boop loads of stuff about this beautiful cookbook oh wow isnt this
            cookbook great hello hello!Beep boop loads of stuff about this
            beautiful cookbook oh wow isnt this cookbook great hello hello!
          </EuiText>
        </div>
        <div css={styles.contentItem}>
          <EuiTitle size="s">
            <h2>Chefs</h2>
          </EuiTitle>
          <EuiText size="m">
            The content you see on this site is mostly due to the great work of
            our chefs. These chefs, in no particular order, are shown here:The
            content you see on this site is mostly due to the great work of our
            chefs. These chefs, in no particular order, are shown here:The
            content you see on this site is mostly due to the great work of our
            chefs. These chefs, in no particular order, are shown here:The
            content you see on this site is mostly due to the great work of our
            chefs. These chefs, in no particular order, are shown here:
          </EuiText>
          {chefs && <ChefSidebar chefs={chefs} />}
        </div>
      </div>
      <div css={styles.content}>
        <div css={styles.contentItem}>
          <EuiTitle size="s">
            <h2>Glossary</h2>
          </EuiTitle>
          <EuiText size="m">
            The website features a few words which may not be instantly
            recognizable. As such, here is a glossary of terms used:
          </EuiText>
          <ul>
            {glossary.map(glossaryItem => {
              return (
                <li key={glossaryItem.word} css={styles.glossaryItem}>
                  <b>{glossaryItem.word}</b> - {glossaryItem.text}
                </li>
              );
            })}
          </ul>
        </div>
        <div css={styles.contentItem}>
          <EuiTitle size="s">
            <h2>Contribution</h2>
          </EuiTitle>
          <EuiText size="m">
            This website is only possible due to the work of volunteers, be that
            the chefs or the developers. If you want to contribute, please join
            our Discord, linked below. We need developers, designers, chefs, and
            whatever it may be! We also welcome feedback through our discord. In
            addition, the websites code is open source, and may also be
            contributed too, even without joining the discord. GitHub is also
            linked below.
          </EuiText>
          <AvatarComponent avatarSize="l" name="C">
            <p>Discord</p>
            <p>Cookbook.gg</p>
          </AvatarComponent>
          <AvatarComponent avatarSize="l" name="G">
            <p>GitHub</p>
            <p>https://github.com/CookbookGG/web/</p>
          </AvatarComponent>
        </div>
      </div>
    </div>
  );
};
