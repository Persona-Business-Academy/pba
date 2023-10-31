import { FC, memo } from 'react';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Text,
} from '@chakra-ui/react';
import Link from 'next/link';
import { SubLabel, SubLabels } from '@/models/header';

interface MobileNavItemProp {
  label: string;
  children?: SubLabels[];
  href?: string;
}

const MobileNavItem: FC<MobileNavItemProp> = ({ label, children, href }) => {
  return (
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box flex="1" textAlign="left" as={href ? Link : 'span'} {...(href ? { href } : {})}>
            {label}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={0} bg="#F9FAFB" pt={0}>
        <Accordion allowToggle>
          {children?.map((child: SubLabels) => (
            <AccordionItem key={Math.random()}>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    {child.label}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={0} pt={0}>
                {child.subLabels.map((subLabel: SubLabel, i) => (
                  <Box
                    key={i}
                    py={4}
                    my={2}
                    _hover={{
                      bg: '#0000000a',
                    }}>
                    <Text href="/" as={Link} display="block">
                      {subLabel.subLabelName}
                    </Text>
                  </Box>
                ))}
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </AccordionPanel>
    </AccordionItem>
  );
};

export default memo(MobileNavItem);
