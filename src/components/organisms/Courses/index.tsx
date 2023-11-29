/* eslint-disable unused-imports/no-unused-vars */
import React, { FC, useMemo } from 'react';
import { Box, Flex, Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import CourseFilter from '@/components/molecules/CourseFilter';
import TimeIcon from '/public/icons/time_icon.svg';
import LevelIcon from '/public/icons/level_icon.svg';
import LessonsIcon from '/public/icons/book_icon.svg';
import HeartIcon from '/public/icons/heart_icon.svg';
import ArrowLeft from '/public/icons/left_arrow.svg';
import ArrowRight from '/public/icons/right_arrow.svg';
import InputSearchIcon from '/public/icons/search_icon.svg';
import { filterList } from '@/utils/constants/filters';
import { montserrat } from '@/utils/constants/fonts';

type CoursesProps = {};

const Courses: FC<CoursesProps> = () => {
  const params = useSearchParams();

  const getAllSkillLevels = useMemo(() => {
    const keys = params?.getAll('skill-level');

    console.log({ keys });

    if (keys?.length) {
      // return filterList.map(list => list.categoryList.filter(({ value }) => keys.includes(value)));

      const x = filterList.flatMap(list => list.categoryList);
      const y = x.map(({ value }) => keys.includes(value));

      console.log({ x, y, keys });
    }

    return [];
  }, [params]);

  const getAllDurations = useMemo(() => params?.getAll('duration'), [params]);
  const getAllTopics = useMemo(() => params?.getAll('topic'), [params]);

  console.log({ getAllSkillLevels });

  return (
    <>
      <Flex
        flexDirection="column"
        maxWidth={1200}
        margin="0 auto"
        lineHeight="normal"
        fontStyle="normal">
        <Flex
          as="section"
          backgroundColor="#ECF7FC"
          borderRadius="12px"
          padding="64px 0"
          marginTop="24px"
          marginBottom="96px">
          <Flex width="794px" margin="0 auto" flexDirection="column" alignItems="center">
            <Text
              className={montserrat.className}
              fontSize="44px"
              fontWeight={700}
              color="#222222"
              marginBottom="16px">
              Courses
            </Text>
            <Text fontSize="16px" fontWeight={400} color="#222222" marginBottom="32px">
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying.
            </Text>
            <InputGroup>
              <Input
                placeholder="What are you looking for?"
                borderRadius="12px"
                border="1px solid #F9FAFB"
                background="#FFF"
                color="#C0C0C0"
                fontSize="16px"
                fontWeight={400}
                padding="12px 16px"
              />
              <InputRightElement width="45px">{<InputSearchIcon />}</InputRightElement>
            </InputGroup>
          </Flex>
        </Flex>
        <Flex as="section" gap="20px" marginBottom="148px">
          <Flex flexDirection="column" width="285px">
            <CourseFilter />
          </Flex>
          <Flex flexDirection="column" width="895px">
            <Flex>
              <Text as="span">Filter By:</Text>
            </Flex>
            <Flex flexDirection="column" gap="16px" marginBottom="40px">
              <Flex
                padding="16px"
                gap="16px"
                borderRadius="12px"
                border="1px solid #F3F4F6"
                backgroundColor="#FFFFFF">
                <Box>
                  <Image
                    src="/images/public_available/offline_courses.jpg"
                    alt=""
                    width={240}
                    height={154}
                  />
                </Box>
                <Box maxWidth="608px" color="#222222">
                  <Flex
                    justifyContent="space-between"
                    alignItems="center"
                    fontWeight={700}
                    marginBottom="8px">
                    <Text fontSize="24px">Interior design</Text>
                    <Text fontSize="16px">100$/month</Text>
                  </Flex>
                  <Text fontWeight={400} fontSize="16px" marginBottom="16px">
                    This professional interior designing course will help you gain practical
                    knowledge on how to create and manage your own design projects right through to
                    running your own interior design business.This professional interior designing
                    course will....
                  </Text>
                  <Flex justifyContent="space-between">
                    <Flex width="332px" justifyContent="space-between" alignItems="center">
                      <Flex gap="8px">
                        <TimeIcon />
                        <Text>3 month</Text>
                      </Flex>
                      <Flex gap="8px">
                        {<LevelIcon />}
                        <Text>Open level</Text>
                      </Flex>
                      <Flex gap="8px">
                        <LessonsIcon />
                        <Text>50 lessons</Text>
                      </Flex>
                    </Flex>
                    <Flex>{<HeartIcon />}</Flex>
                  </Flex>
                </Box>
              </Flex>
              <Flex
                padding="16px"
                gap="16px"
                borderRadius="12px"
                border="1px solid #F3F4F6"
                backgroundColor="#FFFFFF">
                <Box>
                  <Image
                    src="/images/public_available/offline_courses.jpg"
                    alt=""
                    width={240}
                    height={154}
                  />
                </Box>
                <Box maxWidth="608px" color="#222222">
                  <Flex
                    justifyContent="space-between"
                    alignItems="center"
                    fontWeight={700}
                    marginBottom="8px">
                    <Text fontSize="24px">Interior design</Text>
                    <Text fontSize="16px">100$/month</Text>
                  </Flex>
                  <Text fontWeight={400} fontSize="16px" marginBottom="16px">
                    This professional interior designing course will help you gain practical
                    knowledge on how to create and manage your own design projects right through to
                    running your own interior design business.This professional interior designing
                    course will....
                  </Text>
                  <Flex justifyContent="space-between">
                    <Flex width="332px" justifyContent="space-between" alignItems="center">
                      <Flex gap="8px">
                        {<TimeIcon />}
                        <Text>3 month</Text>
                      </Flex>
                      <Flex gap="8px">
                        {<LevelIcon />}
                        <Text>Open level</Text>
                      </Flex>
                      <Flex gap="8px">
                        {<LessonsIcon />}
                        <Text>50 lessons</Text>
                      </Flex>
                    </Flex>
                    <Flex>{<HeartIcon />}</Flex>
                  </Flex>
                </Box>
              </Flex>
              <Flex
                padding="16px"
                gap="16px"
                borderRadius="12px"
                border="1px solid #F3F4F6"
                backgroundColor="#FFFFFF">
                <Box>
                  <Image
                    src="/images/public_available/offline_courses.jpg"
                    alt=""
                    width={240}
                    height={154}
                  />
                </Box>
                <Box maxWidth="608px" color="#222222">
                  <Flex
                    justifyContent="space-between"
                    alignItems="center"
                    fontWeight={700}
                    marginBottom="8px">
                    <Text fontSize="24px">Interior design</Text>
                    <Text fontSize="16px">100$/month</Text>
                  </Flex>
                  <Text fontWeight={400} fontSize="16px" marginBottom="16px">
                    This professional interior designing course will help you gain practical
                    knowledge on how to create and manage your own design projects right through to
                    running your own interior design business.This professional interior designing
                    course will....
                  </Text>
                  <Flex justifyContent="space-between">
                    <Flex width="332px" justifyContent="space-between" alignItems="center">
                      <Flex gap="8px">
                        {<TimeIcon />}
                        <Text>3 month</Text>
                      </Flex>
                      <Flex gap="8px">
                        {<LevelIcon />}
                        <Text>Open level</Text>
                      </Flex>
                      <Flex gap="8px">
                        {<LessonsIcon />}
                        <Text>50 lessons</Text>
                      </Flex>
                    </Flex>
                    <Flex>{<HeartIcon />}</Flex>
                  </Flex>
                </Box>
              </Flex>
              <Flex
                padding="16px"
                gap="16px"
                borderRadius="12px"
                border="1px solid #F3F4F6"
                backgroundColor="#FFFFFF">
                <Box>
                  <Image
                    src="/images/public_available/offline_courses.jpg"
                    alt=""
                    width={240}
                    height={154}
                  />
                </Box>
                <Box maxWidth="608px" color="#222222">
                  <Flex
                    justifyContent="space-between"
                    alignItems="center"
                    fontWeight={700}
                    marginBottom="8px">
                    <Text fontSize="24px">Interior design</Text>
                    <Text fontSize="16px">100$/month</Text>
                  </Flex>
                  <Text fontWeight={400} fontSize="16px" marginBottom="16px">
                    This professional interior designing course will help you gain practical
                    knowledge on how to create and manage your own design projects right through to
                    running your own interior design business.This professional interior designing
                    course will....
                  </Text>
                  <Flex justifyContent="space-between">
                    <Flex width="332px" justifyContent="space-between" alignItems="center">
                      <Flex gap="8px">
                        {<TimeIcon />}
                        <Text>3 month</Text>
                      </Flex>
                      <Flex gap="8px">
                        {<LevelIcon />}
                        <Text>Open level</Text>
                      </Flex>
                      <Flex gap="8px">
                        {<LessonsIcon />}
                        <Text>50 lessons</Text>
                      </Flex>
                    </Flex>
                    <Flex>{<HeartIcon />}</Flex>
                  </Flex>
                </Box>
              </Flex>
              <Flex
                padding="16px"
                gap="16px"
                borderRadius="12px"
                border="1px solid #F3F4F6"
                backgroundColor="#FFFFFF">
                <Box>
                  <Image
                    src="/images/public_available/offline_courses.jpg"
                    alt=""
                    width={240}
                    height={154}
                  />
                </Box>
                <Box maxWidth="608px" color="#222222">
                  <Flex
                    justifyContent="space-between"
                    alignItems="center"
                    fontWeight={700}
                    marginBottom="8px">
                    <Text fontSize="24px">Interior design</Text>
                    <Text fontSize="16px">100$/month</Text>
                  </Flex>
                  <Text fontWeight={400} fontSize="16px" marginBottom="16px">
                    This professional interior designing course will help you gain practical
                    knowledge on how to create and manage your own design projects right through to
                    running your own interior design business.This professional interior designing
                    course will....
                  </Text>
                  <Flex justifyContent="space-between">
                    <Flex width="332px" justifyContent="space-between" alignItems="center">
                      <Flex gap="8px">
                        {<TimeIcon />}
                        <Text>3 month</Text>
                      </Flex>
                      <Flex gap="8px">
                        {<LevelIcon />}
                        <Text>Open level</Text>
                      </Flex>
                      <Flex gap="8px">
                        {<LessonsIcon />}
                        <Text>50 lessons</Text>
                      </Flex>
                    </Flex>
                    <Flex>{<HeartIcon />}</Flex>
                  </Flex>
                </Box>
              </Flex>
              <Flex
                padding="16px"
                gap="16px"
                borderRadius="12px"
                border="1px solid #F3F4F6"
                backgroundColor="#FFFFFF">
                <Box>
                  <Image
                    src="/images/public_available/offline_courses.jpg"
                    alt=""
                    width={240}
                    height={154}
                  />
                </Box>
                <Box maxWidth="608px" color="#222222">
                  <Flex
                    justifyContent="space-between"
                    alignItems="center"
                    fontWeight={700}
                    marginBottom="8px">
                    <Text fontSize="24px">Interior design</Text>
                    <Text fontSize="16px">100$/month</Text>
                  </Flex>
                  <Text fontWeight={400} fontSize="16px" marginBottom="16px">
                    This professional interior designing course will help you gain practical
                    knowledge on how to create and manage your own design projects right through to
                    running your own interior design business.This professional interior designing
                    course will....
                  </Text>
                  <Flex justifyContent="space-between">
                    <Flex width="332px" justifyContent="space-between" alignItems="center">
                      <Flex gap="8px">
                        {<TimeIcon />}
                        <Text>3 month</Text>
                      </Flex>
                      <Flex gap="8px">
                        {<LevelIcon />}
                        <Text>Open level</Text>
                      </Flex>
                      <Flex gap="8px">
                        {<LessonsIcon />}
                        <Text>50 lessons</Text>
                      </Flex>
                    </Flex>
                    <Flex>{<HeartIcon />}</Flex>
                  </Flex>
                </Box>
              </Flex>
              <Flex
                padding="16px"
                gap="16px"
                borderRadius="12px"
                border="1px solid #F3F4F6"
                backgroundColor="#FFFFFF">
                <Box>
                  <Image
                    src="/images/public_available/offline_courses.jpg"
                    alt=""
                    width={240}
                    height={154}
                  />
                </Box>
                <Box maxWidth="608px" color="#222222">
                  <Flex
                    justifyContent="space-between"
                    alignItems="center"
                    fontWeight={700}
                    marginBottom="8px">
                    <Text fontSize="24px">Interior design</Text>
                    <Text fontSize="16px">100$/month</Text>
                  </Flex>
                  <Text fontWeight={400} fontSize="16px" marginBottom="16px">
                    This professional interior designing course will help you gain practical
                    knowledge on how to create and manage your own design projects right through to
                    running your own interior design business.This professional interior designing
                    course will....
                  </Text>
                  <Flex justifyContent="space-between">
                    <Flex width="332px" justifyContent="space-between" alignItems="center">
                      <Flex gap="8px">
                        {<TimeIcon />}
                        <Text>3 month</Text>
                      </Flex>
                      <Flex gap="8px">
                        {<LevelIcon />}
                        <Text>Open level</Text>
                      </Flex>
                      <Flex gap="8px">
                        {<LessonsIcon />}
                        <Text>50 lessons</Text>
                      </Flex>
                    </Flex>
                    <Flex>{<HeartIcon />}</Flex>
                  </Flex>
                </Box>
              </Flex>
            </Flex>
            <Flex
              justifyContent="center"
              alignItems="center"
              gap="38px"
              color="#5B5B5B"
              fontWeight={600}
              fontSize="14px"
              lineHeight="20px">
              <Text>{<ArrowLeft />}</Text>
              <Text>1</Text>
              <Text>2</Text>
              <Text>3</Text>
              <Text>4</Text>
              <Text>5</Text>
              <Text>6</Text>
              <Text>7</Text>
              <Text>...</Text>
              <Text>52</Text>
              <Text>{<ArrowRight />}</Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        as="section"
        backgroundColor="#1F1646"
        borderRadius="0px 48px 48px 0"
        maxWidth="1560px"
        height="484px"
        marginBottom="148px">
        <Flex
          maxWidth={449}
          flexDirection="column"
          gap="24px"
          alignItems="center"
          justifyContent="center"
          color="#FFFFFF"
          textAlign="center"
          lineHeight="normal"
          fontStyle="normal"
          marginLeft="400px">
          <Text fontSize="32px" fontWeight={700}>
            How our skill management works
          </Text>
          <Text fontSize="16px" fontWeight={400}>
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print,
            graphic or web designs. The passage is attributed to an unknown typesetter in the 15th
            century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum
            for use in A Type Specimen Book. It usually Begins with:
          </Text>
        </Flex>
      </Flex>
    </>
  );
};

export default Courses;