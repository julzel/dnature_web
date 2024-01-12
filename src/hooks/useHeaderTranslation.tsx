import {useTranslations} from 'next-intl';
import { INavLink } from '@/types';

const HeaderNavigationItems = () => {
    const t = useTranslations('Header');

    const navLinks: INavLink[] = [
        { path: '/', label: t('home') },
        { path: '/store', label: t('store') },
        { path: '/blog', label: t('blog') },
        { path: '/faq', label: t('faq') },
        { path: '/int', label: 'int' },
      ];

      return navLinks;
};

export default HeaderNavigationItems;