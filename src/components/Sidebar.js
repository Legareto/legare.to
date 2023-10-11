"use client";

import { Disclosure } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import {
  HomeIcon,
  IdentificationIcon,
  AcademicCapIcon,
  BeakerIcon,
  NewspaperIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

const navigation = [
  { name: "Accueil", href: "/", icon: HomeIcon, current: true },
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

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Sidebar() {
  return (
    <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r shadow-lg border-gray-200 bg-white px-6">
      <div className="flex h-16 shrink-0 items-center">Tommy Légaré</div>
      <nav className="flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" className="-mx-2 space-y-1">
              {navigation.map((item) => (
                <li key={item.name}>
                  {!item.children ? (
                    <a
                      href={item.href}
                      className={classNames(
                        item.current ? "bg-gray-50" : "hover:bg-gray-50",
                        "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold text-gray-700"
                      )}
                    >
                      <item.icon
                        className="h-6 w-6 shrink-0 text-gray-400"
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  ) : (
                    <Disclosure as="div">
                      {({ open }) => (
                        <>
                          <Disclosure.Button
                            className={classNames(
                              item.current ? "bg-gray-50" : "hover:bg-gray-50",
                              "flex items-center w-full text-left rounded-md p-2 gap-x-3 text-sm leading-6 font-semibold text-gray-700"
                            )}
                          >
                            <item.icon
                              className="h-6 w-6 shrink-0 text-gray-400"
                              aria-hidden="true"
                            />
                            {item.name}
                            <ChevronRightIcon
                              className={classNames(
                                open
                                  ? "rotate-90 text-gray-500"
                                  : "text-gray-400",
                                "ml-auto h-5 w-5 shrink-0"
                              )}
                              aria-hidden="true"
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel as="ul" className="mt-1 px-2">
                            {item.children.map((subItem) => (
                              <li key={subItem.name}>
                                {/* 44px */}
                                <Disclosure.Button
                                  as="a"
                                  href={subItem.href}
                                  className={classNames(
                                    subItem.current
                                      ? "bg-gray-50"
                                      : "hover:bg-gray-50",
                                    "block rounded-md py-2 pr-2 pl-9 text-sm leading-6 text-gray-700"
                                  )}
                                >
                                  {subItem.name}
                                </Disclosure.Button>
                              </li>
                            ))}
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  )}
                </li>
              ))}
            </ul>
          </li>
          <li className="-mx-6 mt-auto">Socials</li>
        </ul>
      </nav>
    </div>
  );
}
