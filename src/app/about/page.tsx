import React, { FC } from 'react';
import classes from './page.module.scss';
import Image from 'next/image';

type Props = {};

const About: FC<Props> = () => {
  return (
    <>
      <div className={classes.about}>
        <div className={classes.about__content}>
          Hi, we’re <br></br>
          <span>Persona </span>
          And we’re changing the way people think and feel about training.
        </div>
      </div>
      {/* Our Mission */}
      <div className={classes.missions}>
        <div className={classes.missions__content}>
          <h2 className={classes.missions__title}>Our Mission</h2>
          <div className={classes.missions__subtitle}>
            <p className={classes.missions__text}>
              To create value – each day, every day – as we build an equal and accessible learning
              environment for all. The BYJU'S mission is to redefine how the world learns through
              relentless effort and innovation, breaking the barriers to quality education, and
              helping to build a learning ecosystem that will create leaders of tomorrow.
            </p>
          </div>
        </div>

        <div className={classes.missions__container}>
          <div className={classes.courses}>
            {/* //1 */}
            <div className={classes.courses__content}>
              <div className={classes.courses__heading}>
                <h4 className={classes.courses__title}>
                  Lorem ipsum, or lipsum as it is sometimes known, print, graphic or web designs.
                </h4>
                <div className={classes.courses__text}>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                    unknown printer took a galley of type and scrambled it to make a type specimen
                    book. It has survived not only five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged.
                  </p>
                </div>
              </div>
              <div className={classes.courses__images}>
                <Image
                  src="/courses_img.jpg"
                  alt="Description of the image"
                  width={509}
                  height={402}
                />
              </div>
            </div>
            {/* //2 */}
            <div className={classes.courses__content}>
              <div className={classes.courses__images}>
                <Image
                  src="/courses_img.jpg"
                  alt="Description of the image"
                  width={509}
                  height={402}
                />
              </div>
              <div className={classes.courses__heading}>
                <h4 className={classes.courses__title}>
                  Lorem ipsum, or lipsum as it is sometimes known, print, graphic or web designs.
                </h4>
                <div className={classes.courses__text}>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                    unknown printer took a galley of type and scrambled it to make a type specimen
                    book. It has survived not only five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged.
                  </p>
                </div>
              </div>
            </div>
            {/* //3 */}
            <div className={classes.courses__content}>
              <div className={classes.courses__heading}>
                <h4 className={classes.courses__title}>
                  Lorem ipsum, or lipsum as it is sometimes known, print, graphic or web designs.
                </h4>
                <div className={classes.courses__text}>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                    unknown printer took a galley of type and scrambled it to make a type specimen
                    book. It has survived not only five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged.
                  </p>
                </div>
              </div>
              <div className={classes.courses__images}>
                <Image
                  src="/courses_img.jpg"
                  alt="Description of the image"
                  width={509}
                  height={402}
                />
              </div>
            </div>
          </div>


        //*Value



        </div>


      </div>
    </>
  );
};

export default About;
