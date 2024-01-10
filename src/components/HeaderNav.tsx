'use client';
import NextLink from 'next/link';
import { Flex, Link } from '@chakra-ui/react';
import { INavLink } from '@/types';

type HeaderNavProps = {
  navLinks: INavLink[];
  hideOnLargeScreens?: boolean;
};

const HeaderNav: React.FC<HeaderNavProps> = ({
  navLinks,
  hideOnLargeScreens,
}) => {

  return (
    <Flex as='nav' align='center'>
      {navLinks.map((link, index) => (
        <Link
          key={index}
          href={link.path}
          passHref
          as={NextLink}
          px={2}
          py={1}
          rounded={'md'}
          _hover={{ textDecoration: 'none', bg: 'cyan.700' }}
        >
          {link.label}
        </Link>
      ))}
    </Flex>
  );
};

export default HeaderNav;
