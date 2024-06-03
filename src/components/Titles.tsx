import React, { ReactNode, ElementType } from 'react';
import { Heading, HeadingProps } from '@chakra-ui/react';

interface TitleProps extends HeadingProps {
  type:
    | 'banner'
    | 'page'
    | 'section'
    | 'subtitle'
    | 'subtitle-2'
    | 'paragraph'
    | 'caption';
  children: ReactNode;
}

const Title = ({ type, children, ...props }: TitleProps) => {
  let size: HeadingProps['size'];
  let as: ElementType;

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
      size = 'lg'; // Assuming 'l' was a typo
      as = 'h4';
      break;
    case 'paragraph':
      size = 'md';
      as = 'p';
      break;
    case 'caption':
      size = 'sm';
      as = 'p';
      break;
    default:
      throw new Error(`Unhandled type: ${type}`);
  }

  return (
    <Heading as={as} size={size} {...props}>
      {children}
    </Heading>
  );
};

export default Title;
