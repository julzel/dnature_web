import { ReactNode } from 'react';
import { Heading, HeadingProps } from '@chakra-ui/react';

interface TitleProps extends HeadingProps {
  type: 'banner' | 'page' | 'section' | 'subtitle' | 'subtitle-2';
  children: ReactNode;
}

const Title: React.FC<TitleProps> = ({ type, children, ...props }) => {
  let size: HeadingProps['size'];
  let as: React.ElementType;

  switch (type) {
    case 'banner':
      size = '4xl';
      as = 'h2';
      break;
    case 'page':
      size = '3xl';
      as = 'h1';
      break;
    case 'section':
      size = '2xl';
      as = 'h2';
      break;
    case 'subtitle':
      size = 'xl';
      as = 'h3';
      break;
    case 'subtitle-2':
      size = 'l';
      as = 'h4';
      break;
    default:
      size = 'md';
      as = 'p';
  }

  return (
    <Heading as={as} size={size} {...props}>
      {children}
    </Heading>
  );
};

export default Title;
