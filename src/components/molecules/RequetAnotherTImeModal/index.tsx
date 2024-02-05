import React, { FC } from 'react';
import {
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import { classValidatorResolver } from '@hookform/resolvers/class-validator';
import { Controller, useForm } from 'react-hook-form';
import { Button, FormInput, PhoneNumberInput } from '@/components/atoms';
import FormTextarea from '@/components/atoms/FormTextarea';
import { RequestAnotherTimeValidation } from '@/utils/validation/offline-course';

type RequestAnotherTimeModalProps = {
  isOpen: boolean;
  onClose: () => void;
  timeSubmitHandler: (data: RequestAnotherTimeValidation) => void;
};

const resolver = classValidatorResolver(RequestAnotherTimeValidation);

const RequestAnotherTimeModal: FC<RequestAnotherTimeModalProps> = ({
  isOpen,
  onClose,
  timeSubmitHandler,
}) => {
  const {
    control,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<RequestAnotherTimeValidation>({
    resolver,
    defaultValues: { fullName: '', email: '', phoneNumber: '', startTime: '', notes: '' },
  });

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="2xl" isCentered>
      <ModalOverlay />
      <ModalContent py="20px">
        <ModalHeader>Request Another Time</ModalHeader>
        <ModalCloseButton />
        <ModalBody display="flex" gap="20px" flexDirection="column">
          <Flex
            gap="20px"
            flexDirection={{
              base: 'column',
              sm: 'row',
            }}>
            <Controller
              name="fullName"
              control={control}
              rules={{ required: 'This field is required' }}
              render={({ field: { onChange, value } }) => (
                <FormInput
                  isRequired
                  isInvalid={!!errors.fullName?.message}
                  name="firstName"
                  formLabelName="Full Name"
                  value={value}
                  handleInputChange={onChange}
                  formErrorMessage={errors.fullName?.message}
                />
              )}
            />
            <Controller
              name="email"
              control={control}
              rules={{ required: 'This field is required' }}
              render={({ field: { onChange, value } }) => (
                <FormInput
                  isRequired
                  isInvalid={!!errors.email?.message}
                  name="lastName"
                  type="email"
                  formLabelName="Email"
                  value={value}
                  placeholder="you@example.com"
                  handleInputChange={onChange}
                  formErrorMessage={errors.email?.message}
                />
              )}
            />
          </Flex>
          <Flex
            width={{
              base: '100%',
              lg: 'calc(50% - 10px)',
            }}>
            <Controller
              name="phoneNumber"
              control={control}
              rules={{
                required: 'This field is required',
              }}
              render={({ field: { onChange, value } }) => (
                <PhoneNumberInput
                  onChange={onChange}
                  value={value}
                  isRequired
                  formLabelName="Phone Number"
                />
              )}
            />
          </Flex>
          <Flex
            gap="20px"
            flexDirection={{
              base: 'column',
              sm: 'row',
            }}>
            <Controller
              name="startTime"
              control={control}
              rules={{
                required: 'This field is required',
              }}
              render={({ field: { onChange, value } }) => (
                <FormInput
                  isRequired
                  isInvalid={!!errors.startTime?.message}
                  name="lastName"
                  type="time"
                  step="60"
                  formLabelName="Start time"
                  value={value}
                  handleInputChange={onChange}
                  formErrorMessage={errors.startTime?.message}
                />
              )}
            />
            <Controller
              name="endTime"
              control={control}
              rules={{
                required: 'This field is required',
              }}
              render={({ field: { onChange, value, name } }) => (
                <FormInput
                  isRequired
                  isInvalid={!!errors.endTime?.message}
                  name={name}
                  type="time"
                  step="60"
                  formLabelName="End time"
                  value={value}
                  handleInputChange={onChange}
                  formErrorMessage={errors.endTime?.message}
                />
              )}
            />
          </Flex>
          <Flex>
            <Controller
              name="notes"
              control={control}
              rules={{
                required: 'This field is required',
              }}
              render={({ field: { onChange, value, name } }) => (
                <FormTextarea
                  isRequired
                  name={name}
                  formLabelName="Notes"
                  placeholder="Type here..."
                  value={value}
                  handleInputChange={onChange}
                  isInvalid={!!errors[name]?.message}
                  formErrorMessage={errors[name]?.message}
                />
              )}
            />
          </Flex>
        </ModalBody>

        <ModalFooter display="flex" justifyContent="flex-start">
          <Button onClick={handleSubmit(timeSubmitHandler)} isDisabled={!isValid}>
            Enroll now
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default RequestAnotherTimeModal;
