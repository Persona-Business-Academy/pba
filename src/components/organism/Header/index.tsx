import React, { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import classes from './index.module.scss';

type Props = {};

const Header: FC<Props> = () => {
  return (
    <header className={classes.header}>
      <div className={classes.headerCentered}>
        <div className={classes.header_logo_content}>
          <Image src="/images/others/persona_logo.png" width={135} height={27} alt="persona_logo" />
        </div>
        <menu>
          <nav>
            <ul>
              <li>
                <Link href="/">For Individuals</Link>
              </li>
              <li>
                <Link href="/">For Kids</Link>
              </li>
              <li>
                <Link href="/">Video Courses</Link>
              </li>
              <li>
                <Link href="/">Pricing</Link>
              </li>
              <li>
                <Link href="/">Blog</Link>
              </li>
            </ul>
          </nav>
        </menu>
        <div className={classes.buttonContainer}>
          {/* Need to set Buttons for Signin and Get Started */}
        </div>
      </div>
    </header>
  );
};

export default Header;
