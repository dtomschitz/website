import {MailIcon} from 'lucide-react';
import {FaLinkedinIn} from 'react-icons/fa6';
import {SiGithub} from 'react-icons/si';

import type {SocialLink} from '@/types/social-links';

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'github',
    icon: <SiGithub />,
    title: 'GitHub',
    handle: 'dtomschitz',
    href: 'https://github.com/dtomschitz',
  },
  {
    name: 'linkedin',
    icon: <FaLinkedinIn />,
    title: 'LinkedIn',
    handle: 'david-tomschitz',
    href: 'https://www.linkedin.com/in/david-tomschitz-10838a140',
  },
  {
    name: 'email',
    icon: <MailIcon />,
    title: 'Email',
    handle: 'david@tomschitz.de',
    href: 'mailto:david@tomschitz.de',
  },
];

export function getSocialLinkByName(name: string) {
  return SOCIAL_LINKS.find((link) => link.name === name);
}
