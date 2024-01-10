import { useTranslations } from 'next-intl';
import { Box } from '@chakra-ui/react';

type StringTraslatorProps = {
  type?: 'p' | 'span' | 'div';
  sectionKey: string;
  textKey: string;
};

const StringTraslator: React.FC<StringTraslatorProps> = ({
  type = 'span',
  sectionKey,
  textKey,
}) => {
  const t = useTranslations(sectionKey);
  return <Box as={type}>{t(textKey)}</Box>;
};

export default StringTraslator;
