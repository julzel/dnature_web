'use client';
import { useTransition } from 'react';
import { Flex, Switch, Box, Text, useColorModeValue } from '@chakra-ui/react';
import { useRouter, usePathname } from '../../navigation';
import { useLocale } from 'next-intl';
import StringTraslator from '../StringTraslator';

export default function LocaleSwitcher() {
  const router = useRouter();
  const locale = useLocale();
  const pathname = usePathname();
  const itemColor = useColorModeValue('black', 'white');
  const [isPending, startTransition] = useTransition();

  const onSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const nextLocale = event.target.checked ? 'en' : 'es';
    router.replace(pathname, { locale: nextLocale });
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <Flex
      alignItems='center'
      justifyContent='space-between'
      w='100%'
      color={itemColor}
    >
      <Text fontSize='sm' mr={2}>
        <StringTraslator sectionKey='LocaleSwitcher' textKey='label' />
      </Text>
      <Flex alignItems='center' onClick={(e) => e.stopPropagation()}>
        <Text fontSize='sm' mr={2}>Es</Text>
        <Switch isChecked={locale === 'en'} onChange={onSwitchChange} />
        <Text fontSize='sm' ml={2}>En</Text>
      </Flex>
    </Flex>
  );
}
