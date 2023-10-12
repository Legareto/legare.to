import {
  HomeIcon,
  IdentificationIcon,
  AcademicCapIcon,
  BeakerIcon,
  NewspaperIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

const navigation = [
  { name: "Accueil", href: "/", icon: HomeIcon, current: false },
  {
    name: "Curriculum vitae",
    href: "/curriculumvitae",
    icon: IdentificationIcon,
    current: false,
  },
  {
    name: "Enseignement",
    href: "/enseignement",
    icon: AcademicCapIcon,
    current: false,
  },
  { name: "Recherches", href: "/recherches", icon: BeakerIcon, current: false },
  {
    name: "Publications",
    icon: NewspaperIcon,
    current: false,
    children: [
      { name: "Articles dans des actes de colloque", href: "#" },
      { name: "Communications avec arbitrage", href: "#" },
      { name: "Communications sans arbitrage", href: "#" },
      { name: "Rapport de recherche", href: "#" },
      { name: "Entrevues diffusées", href: "#" },
    ],
  },
  { name: "Contact", href: "/contact", icon: EnvelopeIcon, current: false },
];

export default navigation;
