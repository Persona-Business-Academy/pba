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
import { SubLabel, SubLabels } from '@/utils/models/header';

interface MobileNavItemProp {
  label: string;
  children?: SubLabels[];
  href?: string;
  onClose: () => void;
}

const MobileNavItem: FC<MobileNavItemProp> = ({ label, children, href, onClose }) => {
  return (
    <AccordionItem>
      <AccordionButton>
        <Box
          flex="6"
          fontWeight={600}
          fontSize="14px"
          lineHeight="20px"
          textAlign="left"
          pl={8}
          as={href ? Link : 'span'}
          {...(href ? { href, onClick: onClose } : {})}>
          {label}
        </Box>
        {!!children?.length && (
          <Box flex="1">
            <AccordionIcon />
          </Box>
        )}
      </AccordionButton>
      <AccordionPanel p={0} bg="#F9FAFB">
        <Accordion allowToggle>
          {children?.map((child: SubLabels) => (
            <AccordionItem key={child.id}>
              <AccordionButton pl={0}>
                <Box as="span" flex={6} textAlign="left" pl={24}>
                  {child.label}
                </Box>
                <Box as="span" flex={1}>
                  <AccordionIcon />
                </Box>
              </AccordionButton>
              <AccordionPanel p={0}>
                {(child.subLabels || []).map((subLabel: SubLabel, i) => (
                  <Box
                    key={i}
                    py={4}
                    my={2}
                    _hover={{
                      bg: '#0000000',
                    }}>
                    <Text
                      href={`${href}/${subLabel.id}`}
                      as={Link}
                      display="block"
                      onClick={onClose}>
                      {subLabel.title}
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
