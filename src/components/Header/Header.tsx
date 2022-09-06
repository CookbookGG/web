import * as React from 'react';
import Image from 'next/image';
import styles from './Header.styles';
import stylesPopup from './HeaderPopup.styles';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { imageLoader } from '../../lib/loader';
import logo from '../../images/logo.svg';

import { AiOutlineUser } from 'react-icons/ai';

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  const router = useRouter();
  const onLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push('/');
  };

  return (
    <nav css={styles.nav}>
      <div css={styles.nav_logo}>
        <Image src={logo} onClick={e => onLogoClick(e)} loader={imageLoader} />
      </div>
      <ul css={styles.nav_item_container}>
        <li css={styles.nav_item}>
          <Link href={'/'}>Home</Link>
        </li>
        <li css={styles.nav_item}>
          <Link href={'/about'}>About</Link>
        </li>
      </ul>
      <ul css={[styles.nav_item_container, styles.nav_item_container_right]}>
        <li css={styles.nav_item}>
          <UserProfile />
        </li>
      </ul>
    </nav>
  );
};

const UserProfile = () => {
  const defaultUser = {
    name: 'William Andersson',
    role: 'Admin',
  };
  const [user, setUser] = useState(defaultUser);

  const [isOpen, setIsOpen] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const onMenuButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const myRef = React.useRef(null);

  const handleClickOutside = e => {
    if (!myRef.current.contains(e.target)) {
      if (isOpen) closeMenu();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  });

  const Button = (
    <div onClick={onMenuButtonClick}>
      <AiOutlineUser size={'24px'} />
    </div>
  );

  const ProfilePopupContent = (
    <>
      <ul>
        <li>Name: {user.name}</li>
        <li>Role: {user.role}</li>
      </ul>
      <ul>
        <li>
          <Link href={'/profile'}>Profile</Link>
        </li>
        <li>
          <Link href={'/logout'}>Log Out</Link>
        </li>
      </ul>
    </>
  );

  const LoginPopupContent = (
    <>
      <Link href={'/login'}>Please Login</Link>
    </>
  );

  return (
    <div ref={myRef}>
      {Button}
      {isOpen ? (
        <div css={stylesPopup.popup_container}>
          {isLoggedIn ? ProfilePopupContent : LoginPopupContent}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
