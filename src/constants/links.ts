import { routes } from './routes';
import { CONTACT } from './profile';
import { Github, Linkedin, Twitter, MessageCircle, Package } from 'lucide-react';

export const navLinks = [
  { name: 'Root', href: routes.root },
  { name: 'Who-Am-I', href: routes.ui.whoAmI },
  { name: 'Expertise', href: routes.ui.expertise },
  { name: 'Experience', href: routes.ui.experience },
  { name: 'Projects', href: routes.ui.projects },
  { name: 'Contact', href: routes.ui.contact },
  { name: 'Faqs', href: routes.ui.faqs },
];

export const socialLinks = [
  { name: 'GitHub', href: CONTACT.social.github, icon: Github },
  { name: 'NPM', href: CONTACT.social.npm, icon: Package },
  { name: 'LinkedIn', href: CONTACT.social.linkedin, icon: Linkedin },
  { name: 'Twitter', href: CONTACT.social.twitter, icon: Twitter },
  { name: 'WhatsApp', href: CONTACT.social.whatsapp, icon: MessageCircle },
];

export const sameAsLinks = [CONTACT.social.github, CONTACT.social.linkedin, CONTACT.social.twitter, CONTACT.social.npm];
