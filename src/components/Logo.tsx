import Image from "next/image";
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
    sm: 35,
    md: 50,
    lg: 100,
};

const Logo: React.FC<LogoProps> = ({ variant = 'color', size = 'md' }) => {
    return (
        <Image src={variants[variant]} alt="Logo" width={sizes[size]} height={sizes[size]} />
    );
}
 
export default Logo;