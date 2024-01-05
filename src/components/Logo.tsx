import Image from "next/image";
type LogoProps = {
    variant?: 'black' | 'white' | 'transparent' | 'color';
};

const variants = {
    black: '/images/brand/logo-black.svg',
    white: '/images/brand/logo-bw.svg',
    transparent: '/images/brand/logo-transparent.svg',
    color: '/images/brand/logo.svg',
}

const Logo: React.FC<LogoProps> = ({ variant = 'color' }) => {
    return (
        <Image src={variants[variant]} alt="Logo" width={50} height={50} />
    );
}
 
export default Logo;