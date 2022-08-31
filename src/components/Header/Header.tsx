import * as React from 'react';
import {
  EuiAvatar,
  EuiDragDropContext,
  euiDragDropReorder,
  EuiDroppable,
  EuiFlexGroup,
  EuiFlexItem,
  EuiHeader,
  EuiHeaderLogo,
  EuiHeaderSection,
  EuiHeaderSectionItem,
  EuiHeaderSectionItemButton,
  EuiIcon,
  EuiLink,
  EuiPopover,
  EuiSpacer,
  EuiText,
  useGeneratedHtmlId,
} from '@elastic/eui';

import Image from 'next/image';
import styles from './Header.styles';
import Link from 'next/link';
import logo from '../../../public/images/cookbook-logo.webp';
import { useState } from 'react';

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  return (
    <EuiHeader>
      <EuiHeaderSection grow={false}>
        <EuiHeaderSectionItem border="right">
          <div css={styles.logoContainer}>
            <Image priority src={logo} layout="responsive" />
          </div>
        </EuiHeaderSectionItem>
        <EuiHeaderSectionItem>
          <EuiText css={styles.leftSection}>
            <Link href={'/'}>Home</Link>
          </EuiText>
        </EuiHeaderSectionItem>
        <EuiHeaderSectionItem>
          <EuiText css={styles.leftSection}>
            <Link href={'/about'}>About</Link>
          </EuiText>
        </EuiHeaderSectionItem>
      </EuiHeaderSection>

      <EuiHeaderSection side="right" css={styles.rightSection}>
        <EuiHeaderSectionItem>
          <HeaderUserMenu />
        </EuiHeaderSectionItem>
      </EuiHeaderSection>
    </EuiHeader>
  );
};

const HeaderUserMenu = () => {
  const headerUserPopoverId = useGeneratedHtmlId({
    prefix: 'headerUserPopover',
  });

  const defaultUser = {
    name: 'William Andersson',
    role: 'Admin',
  };

  const [user, setUser] = useState(defaultUser);

  const [isOpen, setIsOpen] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onMenuButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const button = () => {
    if (isLoggedIn) {
      return (
        <EuiHeaderSectionItemButton
          aria-controls={headerUserPopoverId}
          aria-expanded={isOpen}
          aria-haspopup="true"
          aria-label="Account menu"
          onClick={onMenuButtonClick}>
          <EuiAvatar name={user.name} size="s" />
        </EuiHeaderSectionItemButton>
      );
    } else {
      return (
        <EuiHeaderSectionItemButton
          aria-controls={headerUserPopoverId}
          aria-expanded={isOpen}
          aria-haspopup="true"
          aria-label="Account menu"
          onClick={onMenuButtonClick}>
          <EuiIcon type={'user'} size="l" />
        </EuiHeaderSectionItemButton>
      );
    }
  };

  const profilePopup = (
    <EuiFlexGroup
      gutterSize="m"
      className="euiHeaderProfile"
      responsive={false}>
      <EuiFlexItem grow={false}>
        <EuiAvatar name={user.name} size="xl" />
      </EuiFlexItem>

      <EuiFlexItem>
        <EuiText size="m">
          <p>{user.name}</p>
        </EuiText>

        <EuiText size="xs">
          <p>Role: {user.role}</p>
        </EuiText>

        <EuiSpacer size="m" />

        <EuiFlexGroup>
          <EuiFlexItem>
            <EuiFlexGroup justifyContent="spaceBetween">
              <EuiFlexItem grow={false}>
                <EuiLink>Edit profile</EuiLink>
              </EuiFlexItem>

              <EuiFlexItem grow={false}>
                <EuiLink>Log out</EuiLink>
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiFlexItem>
    </EuiFlexGroup>
  );

  const loginPopup = (
    <EuiFlexGroup
      gutterSize="m"
      className="euiHeaderProfile"
      responsive={false}>
      <EuiFlexItem>
        <EuiText>
          <Link href={'/login'}>Login / Sign up</Link>
        </EuiText>
      </EuiFlexItem>
    </EuiFlexGroup>
  );

  return (
    <EuiPopover
      id={headerUserPopoverId}
      button={button()}
      isOpen={isOpen}
      anchorPosition="downRight"
      closePopover={closeMenu}
      panelPaddingSize="none">
      {isLoggedIn ? profilePopup : loginPopup}
    </EuiPopover>
  );
};
