import React, { FC } from 'react';
import classes from './page.module.scss';

type Props = {};

const About: FC<Props> = () => {
  return <div className={classes.about}>About</div>;
};

export default About;
