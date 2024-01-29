import React, { FC, memo, useState } from 'react';
import { Box, Flex, Popover, PopoverContent, PopoverTrigger, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { NavItem, SubLabels } from '@/utils/models/header';
import DesktopSubNav from '../DesktopSubNavigation';

type Props = {
  navItems: NavItem[];
};

const DesktopNav: FC<Props> = ({ navItems }) => {
  const [selectedItem, setSelectedItem] = useState<null | string>(null);
  const [isChevronIconVisible, setIsChevronIconVisible] = useState<null | number>(null);

  return (
    <Stack
      direction={'row'}
      justifyContent="center"
      alignItems="center"
      gap={40}
      onMouseLeave={() => setSelectedItem(null)}>
      {navItems.map((navItem, index) => (
        <Box
          key={index}
          sx={{
            '& popover-trigger-menu:first-child': {
              height: '100%',
            },
          }}>
          <Popover
            trigger="hover"
            id="popover-trigger-menu"
            isOpen={selectedItem === navItem.href ? true : false}>
            <PopoverTrigger>
              <Box
                {...(navItem.href
                  ? {
                      as: Link,
                      href: navItem.href,
                      onMouseOver: () => setSelectedItem(navItem.href || null),
                      onClick: () => setSelectedItem(null),
                    }
                  : {})}
                cursor="pointer"
                fontSize={16}
                fontWeight={400}
                height="100%"
                display="flex"
                alignItems="center"
                color="#222"
                _hover={{
                  textDecoration: 'none',
                  color: '#3CB4E7',
                }}>
                {navItem.label}
              </Box>
            </PopoverTrigger>

            {navItem.children?.length ? (
              <PopoverContent
                id={Date.now().toString()}
                border={0}
                boxShadow="0px 15px 20px 0px rgba(0, 0, 0, 0.05)"
                bg="#fff"
                borderRadius="0px 0px 12px 12px"
                width="100vw"
                height={490}>
                <Stack
                  width={1200}
                  paddingTop={48}
                  paddingBottom={40}
                  margin="0 auto"
                  gap={69}
                  flexDirection="row"
                  onMouseLeave={() => setIsChevronIconVisible(null)}
                  display="flex">
                  <Flex
                    flexBasis="470px"
                    display="flex"
                    gap="14px"
                    flexDirection="column"
                    position="relative">
                    {navItem.children.map((child: SubLabels, index: number) => (
                      <DesktopSubNav
                        key={index}
                        {...child}
                        isChevronIconVisible={isChevronIconVisible}
                        mainCourseLink={navItem.href || ''}
                        setIsChevronIconVisible={setIsChevronIconVisible}
                      />
                    ))}
                  </Flex>
                  <Stack
                    marginLeft="auto"
                    flexGrow={1}
                    display="grid"
                    justifyItems="flex-end"
                    gap={42}
                    gridTemplateColumns="repeat(4,156px)">
                    {navItem.featuredItems?.map(
                      (
                        { imgPath, categoryName }: { imgPath: any; categoryName: any },
                        i: number,
                      ) => (
                        <Flex as={Link} href="" key={i} flexDirection="column" gap={16}>
                          <Image src={imgPath} alt={categoryName} width={156} height={104} />
                          <Text fontSize={16} fontWeight={400} textAlign="center">
                            {categoryName}
                          </Text>
                        </Flex>
                      ),
                    )}
                  </Stack>
                </Stack>
              </PopoverContent>
            ) : null}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

export default memo(DesktopNav);
