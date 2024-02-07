'use client';

import React, { FC, PropsWithChildren, useMemo } from 'react';
import {
  Box,
  Button as ChakraButton,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import { OfflineCourseService } from '@/api/services/OfflineCourseService';
import { Button } from '@/components/atoms';
import RemovableButton from '@/components/atoms/RemovableButton';
import SearchInput from '@/components/atoms/SearchInput';
import CourseFilter from '@/components/molecules/CourseFilter';
import { Course, useCourseFilter } from '@/contexts/CourseFilterContext';
import { CACHE_CONFIG, topicHandler } from '@/utils/constants/filters';

const OnlineOfflineCourseList: FC<PropsWithChildren> = ({ children }) => {
  const { courseNames, removeCourseNameHandler, applyFilterHandler, resetFilterHandler } =
    useCourseFilter();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const { data: offlineCourseGroupedListData } = useQuery(
    ['groupedCourses'],
    OfflineCourseService.getOfflineCourseGroupedList,
    CACHE_CONFIG,
  );

  const { data: offlineCourseSkillListData } = useQuery(
    ['course-skills'],
    OfflineCourseService.getOfflineCourseSkillList,
    CACHE_CONFIG,
  );

  const { data: offlineCourseDurationsListData } = useQuery(
    ['course-durations'],
    OfflineCourseService.getOfflineCourseDurationList,
    CACHE_CONFIG,
  );

  const courseTopicDataList = useMemo(() => {
    if (offlineCourseGroupedListData) {
      return topicHandler(offlineCourseGroupedListData);
    }
    return [];
  }, [offlineCourseGroupedListData]);

  const courseSkillsDataList = useMemo(() => {
    if (offlineCourseSkillListData) {
      return offlineCourseSkillListData.map(courseLevel => ({
        id: Math.trunc(courseLevel.id * Date.now() * Math.random()),
        title: courseLevel.courseLevel,
        value: courseLevel.courseLevel,
      }));
    }
    return [];
  }, [offlineCourseSkillListData]);

  const courseDurationsDataList = useMemo(() => {
    if (offlineCourseDurationsListData) {
      return offlineCourseDurationsListData.map(courseDuration => ({
        id: courseDuration.id * Date.now(),
        title: `${courseDuration.totalDuration} Months`,
        value: courseDuration.totalDuration,
      }));
    }
    return [];
  }, [offlineCourseDurationsListData]);

  return (
    <>
      <Flex
        as="section"
        backgroundColor="#F6FCFF"
        borderRadius="0 0 72px 72px"
        padding={{ base: '36px 0', md: '64px 0' }}
        marginTop="24px"
        marginBottom={{ base: '36px', md: '96px' }}>
        <SearchInput />
      </Flex>
      <Flex
        flexDirection="column"
        maxWidth={1200}
        margin="0 auto"
        lineHeight="normal"
        fontStyle="normal">
        <Flex as="section" gap="20px" marginBottom="148px">
          <Flex flexDirection="column" width="285px" display={{ base: 'none', sm: 'flex' }}>
            <CourseFilter
              courseTopicDataList={courseTopicDataList}
              courseSkillsDataList={courseSkillsDataList}
              courseDurationsDataList={courseDurationsDataList}
            />
          </Flex>

          <Flex flexDirection="column" width="895px" gap={16}>
            <Box position="relative" alignItems="center" gap={16}>
              <Box
                position="relative"
                display={{ base: 'block', sm: 'none' }}
                justifyContent="flex-end"
                zIndex={1}>
                <Flex justifyContent="flex-end" alignItems="center">
                  <Text as="span">Filter</Text>
                  <ChakraButton
                    onClick={() => {
                      onOpen();
                    }}
                    width="20px"
                    bg="transparent"
                    _hover={{ bg: 'none' }}
                    _focus={{ bg: 'none' }}>
                    <Image src="/icons/filter_icon.svg" alt="Filter" width={20} height={20} />
                  </ChakraButton>
                </Flex>
              </Box>
              <Flex position="relative" alignItems="center" gap={16}>
                <Text as="span">Filter By:</Text>
                <Flex flexWrap="wrap" gap="10px">
                  {courseNames.map((course: Course) => (
                    <RemovableButton
                      key={course.id}
                      removeQueryParamHandler={() => {
                        removeCourseNameHandler(course.id);
                      }}>
                      {course.name}
                    </RemovableButton>
                  ))}
                </Flex>
              </Flex>
            </Box>

            <Flex
              flexDirection="column"
              alignItems={{ base: ' center', md: 'start' }}
              gap="16px"
              marginBottom="40px">
              {children}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        as="section"
        backgroundColor="#1F1646"
        borderRadius={{ base: '0', lg: '0px 48px 48px 0' }}
        maxWidth="1560px"
        overflow="hidden"
        flexWrap={{ base: 'wrap', lg: 'nowrap' }}
        justifyContent={{ base: 'center', lg: 'flex-end' }}
        marginBottom={{ base: '36px', lg: '148px' }}>
        <Flex
          maxWidth={449}
          flexDirection="column"
          gap={{ base: '16px', lg: '24px' }}
          alignItems="center"
          padding={{ base: '34px 14px 0', lg: '0' }}
          justifyContent="center"
          color="#FFFFFF"
          textAlign="center">
          <Text fontSize={{ base: '28px', lg: '32px' }} fontWeight={700} margin="0">
            How our skill management works
          </Text>
          <Text fontSize="16px" fontWeight={400}>
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print,
            graphic or web designs. The passage is attributed to an unknown typesetter in the 15th
            century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum
            for use in A Type Specimen Book. It usually Begins with:
          </Text>
        </Flex>
        <Flex
          overflow="hidden"
          minWidth="645px"
          height={{ base: '240px', md: '484px' }}
          position="relative"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
          backgroundPosition="left"
          bgGradient={{
            base: 'linear-gradient(168deg, #1F1646 33%, rgba(255,255,255,0.9) 20%, #00000069 15%),url(/icons/course_skill_bg.png)',
            lg: 'linear-gradient(80deg, #1F1646 33%, rgba(255,255,255,0.9) 20%, #00000069 15%),url(/icons/course_skill_bg.png)',
          }}></Flex>
      </Flex>

      <Modal size="full" onClose={onClose} isOpen={isOpen} isCentered>
        <ModalContent position="absolute">
          <ModalHeader
            height="60px"
            minH={'60px'}
            pl="14px"
            py={{ base: 2 }}
            display="flex"
            alignItems="center">
            <Image
              src="/icons/persona_logo.png"
              width={135}
              height={27}
              alt="persona_logo"
              priority
              style={{ objectFit: 'contain', zIndex: 1000 }}
            />
          </ModalHeader>
          <ModalCloseButton zIndex={1000} onClick={resetFilterHandler} />
          <ModalBody padding="0 16px" marginTop="80px">
            <Box fontWeight="600" mt="36px" lineHeight="20px" fontSize="14px">
              <CourseFilter
                isMobile
                courseTopicDataList={courseTopicDataList}
                courseSkillsDataList={courseSkillsDataList}
                courseDurationsDataList={courseDurationsDataList}
              />
            </Box>
          </ModalBody>
          <ModalFooter display="flex" gap="20px" justifyContent="center" mb="30px">
            <Button
              flex={1}
              width="164px"
              height="38px"
              display="flex"
              justifyContent="center"
              alignItems="center"
              bg="#fff"
              color="#3CB4E7"
              border="1px solid #3CB4E7"
              onClick={resetFilterHandler}>
              Cancel
            </Button>
            <Button
              flex={1}
              width="164px"
              height="38px"
              display="flex"
              justifyContent="center"
              alignItems="center"
              onClick={() => {
                applyFilterHandler();
                onClose();
              }}>
              Apply
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default OnlineOfflineCourseList;
