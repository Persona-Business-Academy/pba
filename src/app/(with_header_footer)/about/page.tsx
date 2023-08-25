import React, { FC } from 'react';
import Image from 'next/image';
import classes from './page.module.scss';

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
              environment for all. The BYJU&apos;S mission is to redefine how the world learns
              through relentless effort and innovation, breaking the barriers to quality education,
              and helping to build a learning ecosystem that will create leaders of tomorrow.
            </p>
          </div>
        </div>

        <div className={classes.missions__container}>
          {/* Courses */}
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
                    Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type
                    specimen book. It has survived not only five centuries, but also the leap into
                    electronic typesetting, remaining essentially unchanged.
                  </p>
                </div>
              </div>
              <div className={classes.courses__images}>
                <Image
                  src="/images/others/courses_img.jpg"
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
                  src="/images/others/courses_img.jpg"
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
                    Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type
                    specimen book. It has survived not only five centuries, but also the leap into
                    electronic typesetting, remaining essentially unchanged.
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
                    Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type
                    specimen book. It has survived not only five centuries, but also the leap into
                    electronic typesetting, remaining essentially unchanged.
                  </p>
                </div>
              </div>
              <div className={classes.courses__images}>
                <Image
                  src="/images/others/courses_img.jpg"
                  alt="Description of the image"
                  width={509}
                  height={402}
                />
              </div>
            </div>
          </div>

          {/* {Value} */}
          <div className={classes.value}>
            {/* Heading Value */}
            <div className={classes.value__heading}>
              <h4 className={classes.value__title}>Our Values</h4>
              <div className={classes.value__subtitle}>
                <p className={classes.value__text}>
                  Our five key values guide everything we do, from the way we build relationships
                  with schools and families to the way we work together behind the scenes to make
                  things happen.
                </p>
              </div>
            </div>

            {/* card content */}

            <div className={classes.cards}>
              {/* column 1 */}
              <div className={classes.cards__column}>
                {/* content 1 */}
                <div className={classes.cards__content}>
                  <div className={classes['cards__img-wrapper']}>
                    <Image
                      src="/about_value_1.svg"
                      alt="About value icon"
                      width={141.58322}
                      height={137.7551}
                      className={classes.cards__img}
                    />
                  </div>
                  <div className={classes.cards__info}>
                    <h6 className={classes.cards__title}>
                      Always Follow <span>Up Process</span>
                    </h6>
                    <p className={classes.cards__text}>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                  </div>
                </div>
                {/* content 2 */}
                <div className={classes.cards__content}>
                  <div className={classes['cards__img-wrapper']}>
                    <Image
                      src="/about_value_2.svg"
                      alt="About value icon"
                      width={141.58322}
                      height={137.7551}
                      className={classes.cards__img}
                    />
                  </div>
                  <div className={classes.cards__info}>
                    <h6 className={classes.cards__title}>
                      Stop Complaining and Fixing
                      <span> Start Fixing</span>
                    </h6>
                    <p className={classes.cards__text}>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                  </div>
                </div>
              </div>
              {/* column 2*/}
              <div className={classes.cards__column}>
                {/* content 1 */}
                <div className={classes.cards__content}>
                  <div className={classes['cards__img-wrapper']}>
                    <Image
                      src="/about_value_3.svg"
                      alt="About value icon"
                      width={141.58322}
                      height={137.7551}
                      className={classes.cards__img}
                    />
                  </div>
                  <div className={classes.cards__info}>
                    <h6 className={classes.cards__title}>
                      Never Compromise <span>with Quality</span>
                    </h6>
                    <p className={classes.cards__text}>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                  </div>
                </div>
                {/* content 2 */}
                <div className={classes.cards__content}>
                  <div className={classes['cards__img-wrapper']}>
                    <Image
                      src="/about_value_4.svg"
                      alt="About value icon"
                      width={141.58322}
                      height={137.7551}
                      className={classes.cards__img}
                    />
                  </div>
                  <div className={classes.cards__info}>
                    <h6 className={classes.cards__title}>
                      Show Ownership &<span> Accountability</span>
                    </h6>
                    <p className={classes.cards__text}>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                  </div>
                </div>
              </div>
              {/* column 3 */}
              <div className={classes.cards__column}>
                {/* content 1 */}
                <div className={classes.cards__content}>
                  <div className={classes['cards__img-wrapper']}>
                    <Image
                      src="/about_value_5.svg"
                      alt="About value icon"
                      width={141.58322}
                      height={137.7551}
                      className={classes.cards__img}
                    />
                  </div>
                  <div className={classes.cards__info}>
                    <h6 className={classes.cards__title}>
                      Speed & <span>Scale</span>
                    </h6>
                    <p className={classes.cards__text}>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                  </div>
                </div>
                {/* content 2 */}
                <div className={classes.cards__content}>
                  <div className={classes['cards__img-wrapper']}>
                    <Image
                      src="/about_value_6.svg"
                      alt="About value icon"
                      width={141.58322}
                      height={137.7551}
                      className={classes.cards__img}
                    />
                  </div>
                  <div className={classes.cards__info}>
                    <h6 className={classes.cards__title}>
                      Be Persistence &<span> Effective Learner</span>
                    </h6>
                    <p className={classes.cards__text}>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Our History */}
        </div>

        <div className={classes['history-section']}>
          <div className={classes['history-section__heading']}>
            <h4 className={classes['histpory-section__title']}>Our History</h4>
            <p className={classes['history-section__subtitle']}>
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out
              print, graphic or web designs. The passage is attributed to an unknown typesetter in
              the `
            </p>

            <div className={classes['history-section__big-circle']}></div>
          </div>

          {/* history-content */}

          <div className={classes['history-section__container']}>
            {/* / */}
            <div className={classes['history-section__content']}>
              {/* 1 */}
              <div className={classes['history-section__row']}>
                <span className={classes['history-section__year']}>2012</span>
                <h5 className={classes['history-section__title']}>Our first experiment</h5>
                <div className={classes['history-section__intro-text']}>
                  <p>
                    Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying
                    out print, graphic or web designs. The passage is attributed to an unknown
                    typesetter in the 15th century who is thought to have scrambled parts of
                    Cicero&apos;s De Finibus.
                  </p>
                </div>
              </div>
              {/* 2*/}
              <div className={classes['history-section__row']}>
                <span className={classes['history-section__year']}>2012</span>
                <h5 className={classes['history-section__title']}>Our first experiment</h5>
                <div className={classes['history-section__intro-text']}>
                  <p>
                    Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying
                    out print, graphic or web designs. The passage is attributed to an unknown
                    typesetter in the 15th century who is thought to have scrambled parts of
                    Cicero&apos;s De Finibus.
                  </p>
                </div>
              </div>
              {/* 3*/}
              <div className={classes['history-section__row']}>
                <span className={classes['history-section__year']}>2012</span>
                <h5 className={classes['history-section__title']}>Our first experiment</h5>
                <div className={classes['history-section__intro-text']}>
                  <p>
                    Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying
                    out print, graphic or web designs. The passage is attributed to an unknown
                    typesetter in the 15th century who is thought to have scrambled parts of
                    Cicero&apos;s De Finibus.
                  </p>
                </div>
              </div>
              {/* 4*/}
              <div className={classes['history-section__row']}>
                <span className={classes['history-section__year']}>2012</span>
                <h5 className={classes['history-section__title']}>Our first experiment</h5>
                <div className={classes['history-section__intro-text']}>
                  <p>
                    Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying
                    out print, graphic or web designs. The passage is attributed to an unknown
                    typesetter in the 15th century who is thought to have scrambled parts of
                    Cicero&apos;s De Finibus.
                  </p>
                </div>
              </div>
            </div>

            {/* --- */}
            <div className={classes['history-section__content']}>
              <div className={classes['history-section__line']}>
                {/* circle box */}
                <div className={classes['history-section__circle']}>
                  <div className={classes['history-section__circle-item']}></div>
                  <div className={classes['history-section__circle-item']}></div>
                </div>
                {/* circle box */}
                <div className={classes['history-section__circle']}>
                  <div className={classes['history-section__circle-item']}></div>
                  <div className={classes['history-section__circle-item']}></div>
                </div>
                {/* circle box */}
                <div className={classes['history-section__circle']}>
                  <div className={classes['history-section__circle-item']}></div>
                  <div className={classes['history-section__circle-item']}></div>
                </div>
                {/* circle box */}
                <div className={classes['history-section__circle']}>
                  <div className={classes['history-section__circle-item']}></div>
                  <div className={classes['history-section__circle-item']}></div>
                </div>
              </div>
            </div>
            {/* / */}
            <div
              className={`${classes['history-section__content']} ${classes['history-section__top']}`}>
              {/* 1 */}
              <div className={classes['history-section__row']}>
                <span className={classes['history-section__year']}>2012</span>
                <h5 className={classes['history-section__title']}>Our first experiment</h5>
                <div className={classes['history-section__intro-text']}>
                  <p>
                    Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying
                    out print, graphic or web designs. The passage is attributed to an unknown
                    typesetter in the 15th century who is thought to have scrambled parts of
                    Cicero&apos;s De Finibus.
                  </p>
                </div>
              </div>
              {/* 2*/}
              <div className={classes['history-section__row']}>
                <span className={classes['history-section__year']}>2012</span>
                <h5 className={classes['history-section__title']}>Our first experiment</h5>
                <div className={classes['history-section__intro-text']}>
                  <p>
                    Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying
                    out print, graphic or web designs. The passage is attributed to an unknown
                    typesetter in the 15th century who is thought to have scrambled parts of
                    Cicero&apos;s De Finibus.
                  </p>
                </div>
              </div>
              {/* 3*/}
              <div className={classes['history-section__row']}>
                <span className={classes['history-section__year']}>2012</span>
                <h5 className={classes['history-section__title']}>Our first experiment</h5>
                <div className={classes['history-section__intro-text']}>
                  <p>
                    Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying
                    out print, graphic or web designs. The passage is attributed to an unknown
                    typesetter in the 15th century who is thought to have scrambled parts of
                    Cicero&apos;s De Finibus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* our prey */}

      <div className={classes['our-prey']}>
        <div className={classes['our-prey__container']}>
          <ul className={classes['our-prey__items']}>
            <li className={classes['our-prey__list']}>1M+</li>
            <li className={classes['our-prey__list']}>150+</li>
            <li className={classes['our-prey__list']}>1M+</li>
            <li className={classes['our-prey__list']}>1M+</li>
          </ul>
          <ul className={classes['our-prey__items']}>
            <li className={classes['our-prey__list-name']}>Users on our platform</li>
            <li className={classes['our-prey__list-name']}>Total course</li>
            <li className={classes['our-prey__list-name']}>Users on our platform</li>
            <li className={classes['our-prey__list-name']}>Nanodegree certificates earned</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default About;
