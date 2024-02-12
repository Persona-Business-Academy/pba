import React, { FC } from 'react';
import {
  Box,
  Container,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { segoe } from '@/utils/constants/fonts';

type Props = {};

const Payments: FC<Props> = () => {
  return (
    <Container maxW="90%" mt="50px">
      <Text
        fontSize="28px"
        lineHeight="36px"
        className={segoe.className}
        textAlign="center"
        mb="57px">
        Payments
      </Text>
      <Box>
        <TableContainer>
          <Table variant="simple" size="md" width="100%">
            <Thead>
              <Tr>
                <Th
                  color="#5B5B5B"
                  textTransform="capitalize"
                  fontWeight={400}
                  className={segoe.className}
                  fontSize="16px">
                  Course
                </Th>
                <Th
                  color="#5B5B5B"
                  textTransform="capitalize"
                  fontWeight={400}
                  className={segoe.className}
                  fontSize="16px">
                  Type
                </Th>
                <Th
                  color="#5B5B5B"
                  textTransform="capitalize"
                  fontWeight={400}
                  className={segoe.className}
                  fontSize="16px">
                  Payment date
                </Th>
                <Th
                  color="#5B5B5B"
                  textTransform="capitalize"
                  fontWeight={400}
                  className={segoe.className}
                  fontSize="16px">
                  Payment method
                </Th>
                <Th
                  color="#5B5B5B"
                  textTransform="capitalize"
                  fontWeight={400}
                  className={segoe.className}
                  fontSize="16px">
                  Amount
                </Th>
                <Th
                  color="#5B5B5B"
                  textTransform="capitalize"
                  fontWeight={400}
                  className={segoe.className}
                  fontSize="16px">
                  Status
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td colSpan={6}>No Payment History </Td>
              </Tr>
              {/* {history.map((item, index) => (
                <Tr key={index} height="56px">
                  <Td>{item.course}</Td>
                  <Td>{item.type}</Td>
                  <Td>{item.paymentDate}</Td>
                  <Td>{item.paymentMethod}</Td>
                  <Td>{item.amount}</Td>
                  <Td>{item.status}</Td>
                </Tr>
              ))} */}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
};

export default Payments;
