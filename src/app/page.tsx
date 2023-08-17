'use client';

import { Button } from '@/components/atom';
import { ButtonSizeEnum } from '@/enums/components';

export default function Home() {
  return (
    <>
      <Button size={ButtonSizeEnum.sm}>Button</Button>
      <Button size={ButtonSizeEnum.md}>Button</Button>
      <Button size={ButtonSizeEnum.lg}>Button</Button>
      <Button size={ButtonSizeEnum.lg} isDisabled>
        Button
      </Button>
    </>
  );
}
