'use client';

import { Box, Center, Container, Flex, Heading, Text } from '@chakra-ui/react';
import classes from './page.module.scss';

export default function LeadershipIndividual() {
  return (
    <Container maxWidth={1200} margin="0 auto" className={classes.leadershipIndividualContainer}>
      <Flex flexDirection="column" gap="24px">
        <Flex flexDirection="column" gap="14px" className={classes.nameAndPosition}>
          <Heading fontSize={28} fontWeight={700}>
            Tigran Harutyunyan
          </Heading>
          <Text color="#5b5b5b" fontSize={16} fontWeight={400}>
            Co-founder of Persona
          </Text>
        </Flex>
        <Flex gap="20px">
          <Box display="flex" justifyContent="center" flexDirection="column">
            <Box className={classes.individualImage}></Box>
            <a href="#" className={classes.individualLink}>
              View LinkedIn page
            </a>
          </Box>
          <Box>
            <Center className={classes.leadershipContainerInfo}>
              <Text>
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
                piece of classical Latin literature from 45 BC, making it over 2000 years old.
                Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked
                up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and
                going through the cites of the word in classical literature, discovered the
                undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de
                Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
                BC. This book is a treatise on the theory of ethics, very popular during the
                Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes
                from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the
                1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from
                "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact
                original form, accompanied by English versions from the 1914 translation by H.
                Rackham. <br></br>\ <br></br>Contrary to popular belief, Lorem Ipsum is not simply
                random text. It has roots in a piece of classical Latin literature from 45 BC,
                making it over 2000 years old. Richard McClintock, a Latin professor at
                Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
                consectetur, from a Lorem Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lorem Ipsum comes from
                sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of
                Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of
                ethics, very pop
              </Text>
            </Center>
          </Box>
        </Flex>
      </Flex>
    </Container>
  );
}
