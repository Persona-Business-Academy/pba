import React, { FC, memo } from 'react';
import { Box, Flex, Popover, PopoverContent, PopoverTrigger, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { NavItem, SubLabels } from '@/models/header';
import DesktopSubNav from '../DesktopSubNavigation';

type Props = {
  navItems: NavItem[];
};

const DesktopNav: FC<Props> = ({ navItems }) => {
  return (
    <Stack direction={'row'} justifyContent="center" alignItems="center" gap={40}>
      {navItems.map((navItem, index) => (
        <Box key={index}>
          <Popover trigger="hover" id={`popover-trigger-menu`}>
            <PopoverTrigger>
              <Box
                cursor="pointer"
                fontSize={16}
                fontWeight={400}
                color="#222"
                _hover={{
                  textDecoration: 'none',
                  color: '#3CB4E7',
                }}>
                {navItem.label}
              </Box>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                id={Date.now().toString()}
                border={0}
                boxShadow="0px 15px 20px 0px rgba(0, 0, 0, 0.05)"
                bg="#fff"
                borderRadius="0px 0px 12px 12px"
                width="100vw"
                height={600}>
                <Stack
                  width={1144}
                  paddingTop={48}
                  paddingBottom={40}
                  display="grid"
                  gridTemplateColumns="repeat(auto-fit,minmax(140px,1fr))"
                  columnGap={96}
                  margin="0 auto">
                  {navItem.children.map((child: SubLabels, index: number) => (
                    <DesktopSubNav key={index} {...child} />
                  ))}
                </Stack>
                <Stack width={1144} margin="0 auto">
                  <Text fontSize={16} fontWeight={700} color="#000" marginBottom={16}>
                    Featured
                  </Text>
                </Stack>

                <Stack
                  width={1144}
                  margin="0 auto"
                  display="grid"
                  gap={40}
                  gridTemplateColumns="repeat(4,256px)">
                  {navItem.featuredItems?.map(
                    ({ imgPath, categoryName }: { imgPath: any; categoryName: any }, i: number) => (
                      <Flex key={i} flexDirection="column" gap={16}>
                        <Image src={imgPath} alt={categoryName} width={256} height={172} />
                        <Text fontSize={16} fontWeight={400}>
                          {categoryName}
                        </Text>
                      </Flex>
                    ),
                  )}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

export default memo(DesktopNav);
