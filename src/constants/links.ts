import { routes } from "./routes";
import { Github, Linkedin, Twitter, MessageCircle } from "lucide-react";

export const navLinks = [
  { name: "Root", href: routes.root },
  { name: "Who-Am-I", href: routes.ui.whoAmI },
  { name: "Expertise", href: routes.ui.expertise },
  { name: "Experience", href: routes.ui.experience },
  { name: "Projects", href: routes.ui.projects },
  { name: "Contact", href: routes.ui.contact },
  { name: "Faqs", href: routes.ui.faqs },
];

export const socialLinks = [
  { name: "Github", href: "https://github.com/nofil-zahid", icon: Github },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/nofil-zahid/", icon: Linkedin },
  { name: "Twitter", href: "https://x.com/nofil_zahid", icon: Twitter },
  { name: "Message", href: "https://wa.me/923092051143", icon: MessageCircle },
];
