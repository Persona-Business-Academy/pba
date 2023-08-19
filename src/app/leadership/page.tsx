'use client';
import React, { FC } from 'react';
import {
  Button,
  Center,
  Flex,
  Grid,
  GridItem,
  Heading,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import Image from 'next/image';
import classes from './page.module.scss';

type Props = {};

const Leadership: FC<Props> = () => {
  return (
    <>
      <div className={classes.main_container}>
        <div className={classes.main_titles}>
          <div className={classes.main_headings}>
            <Heading fontSize="32px" className={classes.heading_persona}>
              WE ARE PERSONA
            </Heading>
            <Heading fontSize="44px" className={classes.heading_2_persona}>
              We power better training experiences
            </Heading>
          </div>
          <div className={classes.main_text}>
            <Text>
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out
              print, graphic or web designs. The passage is attributed to an unknown typesetter in
              the 15th century who is thought to have scrambled parts of Cicero's De Finibus
            </Text>
          </div>
        </div>
        <Image
          src="/images/landing/leadership_main.png"
          width={1200}
          height={591}
          alt="Leadership_image"
        />
        <Flex alignItems="center" flexDirection="column" className={classes.our_team_titles}>
          <Heading className={classes.our_team_heading} size="lg" fontSize="32px">
            Meet our Team
          </Heading>
          <Tabs>
            <TabList display="flex" justifyContent="center">
              <Tab>Ex leadership</Tab>
              <Tab>Teachers</Tab>
              <Tab>Team</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <p>one!</p>
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
              <TabPanel padding="0">
                <Grid className={classes.section_team}>
                  <GridItem className={classes.section_grid_item}>
                    <div className={classes.team_image_container}>
                      <Image
                        src="/images/landing/nature.jpg"
                        width={327}
                        height={331.64}
                        alt="Leadership members"
                      />
                    </div>
                    <div className={classes.team_info_container}>
                      <h3 className={classes.team_name}>
                        Name Surname
                        <span></span>
                      </h3>
                      <p className={classes.team_position}>Co-founder of Persona</p>
                      <p className={classes.team_info}>Beach lover, keeping life simple</p>
                    </div>
                  </GridItem>
                  <GridItem className={classes.section_grid_item}>
                    <div className={classes.team_image_container}>
                      <Image
                        src="/images/landing/nature.jpg"
                        width={327}
                        height={331.64}
                        alt="Leadership members"
                      />
                    </div>
                    <div className={classes.team_info_container}>
                      <h3 className={classes.team_name}>
                        Name Surname
                        <span></span>
                      </h3>
                      <p className={classes.team_position}>Co-founder of Persona</p>
                      <p className={classes.team_info}>Beach lover, keeping life simple</p>
                    </div>
                  </GridItem>
                  <GridItem className={classes.section_grid_item}>
                    <div className={classes.team_image_container}>
                      <Image
                        src="/images/landing/nature.jpg"
                        width={327}
                        height={331.64}
                        alt="Leadership members"
                      />
                    </div>
                    <div className={classes.team_info_container}>
                      <h3 className={classes.team_name}>
                        Name Surname
                        <span></span>
                      </h3>
                      <p className={classes.team_position}>Co-founder of Persona</p>
                      <p className={classes.team_info}>Beach lover, keeping life simple</p>
                    </div>
                  </GridItem>
                  <GridItem className={classes.section_grid_item}>
                    <div className={classes.team_image_container}>
                      <Image
                        src="/images/landing/nature.jpg"
                        width={327}
                        height={331.64}
                        alt="Leadership members"
                      />
                    </div>
                    <div className={classes.team_info_container}>
                      <h3 className={classes.team_name}>
                        Name Surname
                        <span></span>
                      </h3>
                      <p className={classes.team_position}>Co-founder of Persona</p>
                      <p className={classes.team_info}>Beach lover, keeping life simple</p>
                    </div>
                  </GridItem>
                  <GridItem className={classes.section_grid_item}>
                    <div className={classes.team_image_container}>
                      <Image
                        src="/images/landing/nature.jpg"
                        width={327}
                        height={331.64}
                        alt="Leadership members"
                      />
                    </div>
                    <div className={classes.team_info_container}>
                      <h3 className={classes.team_name}>
                        Name Surname
                        <span></span>
                      </h3>
                      <p className={classes.team_position}>Co-founder of Persona</p>
                      <p className={classes.team_info}>Beach lover, keeping life simple</p>
                    </div>
                  </GridItem>
                  <GridItem className={classes.section_grid_item}>
                    <div className={classes.team_image_container}>
                      <Image
                        src="/images/landing/nature.jpg"
                        width={327}
                        height={331.64}
                        alt="Leadership members"
                      />
                    </div>
                    <div className={classes.team_info_container}>
                      <h3 className={classes.team_name}>
                        Name Surname
                        <span></span>
                      </h3>
                      <p className={classes.team_position}>Co-founder of Persona</p>
                      <p className={classes.team_info}>Beach lover, keeping life simple</p>
                    </div>
                  </GridItem>
                </Grid>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
      </div>
      <div className={classes.section_apply_now_container}>
        <Flex alignItems="center" flexDirection="column" className={classes.section_apply_now}>
          <h3>Join Our Team</h3>
          <p>
            We're always on the lookout for great talent. Want to join us on our mission to help
            great teams grow? Check out our openings to see where you fit in.
          </p>
          <button>Apply now</button>
        </Flex>
      </div>
    </>
  );
};

export default Leadership;
