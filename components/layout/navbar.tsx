"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronDown, ChevronsDown, ChevronUp, Github, Menu } from "lucide-react";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { ToggleTheme } from "./toogle-theme";
import { title } from "process";

interface RouteProps {
  href: string;
  label: string;
  featureList: FeatureProps[];
}

interface FeatureProps {
  title: string;
  description?: string;
  href?: string;
}

const routeList: RouteProps[] = [
  {
    href: "/",
    label: "Home",
    featureList: [],
  },
  {
    href: "#about-us",
    label: "About Us",
    featureList: [
      {
        title: "Our Company",
        description: "",
        href: "/our-company",
      },
      {
        title: "Mission and Vision",
        href: "/mission-and-vision",
      },
      {
        title: "Corporate Social Responsibility",
        href: "/corp",
      },
      {
        title: "Awards And Affiliations",
        href: "/awards",
      },
      {
        title: "FAQ",
        href: "/faq",
      },
      {
        title: "Gallery",
        href: "/gallery",
      },
    ],
  },
  {
    href: "#",
    label: "Products",
    featureList: [],
  },
  {
    href: "#services",
    label: "Services",
    featureList: [
      {
        title: "Toll Manufacturing",
        description: "",
      },
      {
        title: "Toll Packaging",
        description: "",
      },
      {
        title: "Food Ingredients",
        description: "",
      },
      {
        title: "Food Service",
        description: "",
      },
      {
        title: "Research and Development",
        description: "",
      },
      {
        title: "Documentation",
        description: "",
      },
    ],
  },
  {
    href: "#",
    label: "Blogs",
    featureList: [],
  },
  {
    href: "#",
    label: "Careers",
    featureList: [],
  },
  {
    href: "#contact-us",
    label: "Contact Us",
    featureList: [],
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="shadow-inner bg-opacity-15 w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl top-5 mx-auto sticky border border-secondary z-40 rounded-2xl flex justify-between items-center p-2 bg-card">
      <Link href="/" className="font-bold text-lg flex items-center">
        <Image
          src="/images/GIDC-LOGO-FA_TRANSPARENT-BG.png"
          alt="logo"
          className="h-full w-full rounded-md object-cover"
          width={50}
          height={50}
        />
        {/* GIDC */}
      </Link>

      {/* <!-- Mobile --> */}
      <div className="flex items-center lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Menu
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer lg:hidden"
            />
          </SheetTrigger>

          <SheetContent
            side="left"
            className="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card border-secondary"
          >
            <div>
              <SheetHeader className="mb-4 ml-4">
                <SheetTitle className="flex items-center">
                  <Link href="/" className="flex items-center">
                    <Image
                      src="/images/GIDC-LOGO-FA_TRANSPARENT-BG.png"
                      alt="logo"
                      className="h-full w-full rounded-md object-cover"
                      width={40}
                      height={40}
                    />
                    GIDC
                  </Link>
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-2">
                {routeList.map(({ href, label, featureList }) => (
                  <div key={label}>
                    {featureList.length > 0 ? (
                      <div>
                        <Button
                          onClick={() =>
                            setOpenDropdown(openDropdown === label ? null : label)
                          }
                          variant="ghost"
                          className="justify-between w-full text-base flex items-center"
                        >
                          {label}
                          {openDropdown === label ? <ChevronUp /> : <ChevronDown />}
                        </Button>

                        {/* Feature List Dropdown */}
                        {openDropdown === label && (
                          <div className="ml-4 mt-2 flex flex-col">
                            {featureList.map(({ title, href }) => (
                              <Button
                                key={title}
                                onClick={() => setIsOpen(false)}
                                asChild
                                variant="ghost"
                                className="justify-start text-sm"
                              >
                                <Link href={href || "#"}>{title}</Link>
                              </Button>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Button
                        key={label}
                        onClick={() => setIsOpen(false)}
                        asChild
                        variant="ghost"
                        className="justify-start text-base"
                      >
                        <Link href={href}>{label}</Link>
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <SheetFooter className="flex-col sm:flex-col justify-start items-start">
              <Separator className="mb-2" />
              <ToggleTheme />
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      {/* <!-- Desktop --> */}
      <NavigationMenu className="hidden lg:block mx-auto">
        <NavigationMenuList>
          {routeList.map(({ href, label, featureList }) =>
            featureList.length > 0 ? (
              <NavigationMenuItem key={label}>
                <NavigationMenuTrigger className="bg-card text-base">
                  {label}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[600px] grid-cols-2 gap-5 p-4">
                    <ul className="flex flex-col gap-2">
                      {featureList.map(({ title, description, href }) => (
                        <li
                          key={title}
                          className="rounded-md p-3 text-sm hover:bg-muted"
                        >
                          <a
                            href={href}
                            className="mb-1 font-semibold leading-none text-foreground"
                          >
                            {title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ) : (
              <NavigationMenuLink key={label} asChild>
                <Link href={href} className="text-base px-2">
                  {label}
                </Link>
              </NavigationMenuLink>
            )
          )}
        </NavigationMenuList>
      </NavigationMenu>

      <div className="hidden lg:flex">
        <ToggleTheme />

        {/* <Button asChild size="sm" variant="ghost" aria-label="View on GitHub">
          <Link
            aria-label="View on GitHub"
            href="https://github.com/nobruf/shadcn-landing-page.git"
            target="_blank"
          >
            <Github className="size-5" />
          </Link>
        </Button> */}
      </div>
    </header>
  );
}
