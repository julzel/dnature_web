import {useTranslations} from 'next-intl';
import { INavLink } from '@/types';

const HeaderNavigationItems = () => {
    const t = useTranslations('Header');

    const navLinks: INavLink[] = [
        { path: '/', label: t('home') },
        { path: '/int', label: t('store') },
        { path: '/blog', label: t('blog') },
        { path: '/faq', label: t('faq') },
      ];

      return navLinks;
};

export default HeaderNavigationItems;