import Image from 'next/image';
type LogoProps = {
  variant?: 'black' | 'white' | 'transparent' | 'color';
  size?: 'sm' | 'md' | 'lg';
};

const variants = {
  black: '/images/brand/logo-black.svg',
  white: '/images/brand/logo-bw.svg',
  transparent: '/images/brand/logo-transparent.svg',
  color: '/images/brand/logo.svg',
};

const sizes = {
  sm: {
    height: 35,
    width: 35,
  },
  md: {
    height: 39,
    width: 77,
  },
  lg: {
    height: 100,
    width: 100,
  },
};

const Logo: React.FC<LogoProps> = ({ variant = 'color', size = 'md' }) => {
  return (
    <Image
      src={variants[variant]}
      alt='Logo'
      width={sizes[size].width}
      height={sizes[size].height}
    />
  );
};

export default Logo;
