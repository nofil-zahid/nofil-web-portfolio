import { GithubIcon, LinkedinIcon, TwitterIcon, MessageCircle } from "lucide-react";
import { routes } from "./routes";

export const navLinks = [
  { name: "Who-Am-I", href: routes.ui.whoAmI },
  { name: "Expertise", href: routes.ui.expertise },
  { name: "Experience", href: routes.ui.experience },
  { name: "Projects", href: routes.ui.projects },
  { name: "Contact", href: routes.ui.contact },
  { name: "Faqs", href: routes.ui.faqs },
];

export const socialLinks = [
  { name: "Github", href: "https://github.com/nofil-zahid", icon: GithubIcon },
  { name: "Linkedin", href: "https://www.linkedin.com/in/nofil-zahid/", icon: LinkedinIcon },
  { name: "Twitter", href: "https://x.com/nofil_zahid", icon: TwitterIcon },
  { name: "Whatsapp", href: "https://wa.me/923092051143", icon: MessageCircle },
];
