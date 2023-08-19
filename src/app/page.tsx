'use client';
import { useState } from 'react';
import { Button } from '@/components/atom';
import FormInput from '@/components/molecule/FormInput';
import { ButtonSizeEnum } from '@/enums/components';

export default function Home() {
  const [value, setValue] = useState('');
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <>
      <Button size={ButtonSizeEnum.sm}>Button</Button>
      <Button size={ButtonSizeEnum.md}>Button</Button>
      <Button size={ButtonSizeEnum.lg}>Button</Button>
      <Button size={ButtonSizeEnum.lg} isDisabled>
        Button
      </Button>

      <FormInput
        formLabelName="Email"
        isInvalid={false}
        type="password"
        formHelperText="lorem sadjnasjndja  asd jasnjdnasjndas jdnasjndjnasjnd adinasjndjiasnj"
        placeholder="Placeholder"
        formErrorMessage="Form Error Message"
        value={value}
        isReadOnly={false}
        isRequired
        handleInputChange={handleInputChange}
      />
    </>
  );
}
