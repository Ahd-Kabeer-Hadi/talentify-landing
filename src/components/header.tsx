"use client";
import Image from "next/image";
import logo from "../../public/logo.svg";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import Link from "next/link";
import { ThemeSwitcher } from "./theme-switcher";
import { Button } from "./ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

function Header() {
  const { theme, resolvedTheme } = useTheme();
  const { scrollY } = useScroll();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const backgroundColor = useTransform(scrollY, [0, 50], [
    theme === "dark" || resolvedTheme === "dark"
      ? "rgba(0, 0, 0, 0)"
      : "rgba(255, 255, 255, 0)",
    theme === "dark" || resolvedTheme === "dark"
      ? "rgba(0, 0, 0, 0.7)"
      : "rgba(255, 255, 255, 0.7)",
  ]);

  const backdropFilter = useTransform(scrollY, [0, 50], [
    "blur(0px)",
    "blur(10px)",
  ]);
  const boxShadow = useTransform(scrollY, [0, 50], [
    "0px 0px 0px rgba(0, 0, 0, 0)",
    "0px 4px 6px rgba(0, 0, 0, 0.1)",
  ]);


  return (
    <motion.header
      className="container sticky top-6 z-50 w-full flex items-center rounded-xl justify-between p-5 max-w-7xl mx-auto"
      style={{
        backgroundColor,
        backdropFilter,
        boxShadow,
      }}
    >
      <div className="hidden w-full md:flex items-center justify-between gap-6">
        <div className="flex items-center max-w-40 space-x-5 cursor-pointer">
          <Link href="/" legacyBehavior passHref>
            <Image src={logo} alt="logo" className="object-contain" />
          </Link>
        </div>
        <div className="flex items-center justify-self-end justify-between max-w-3xl gap-6">
          <nav className="flex items-center justify-between gap-6">
            <Link href="#talent-features" legacyBehavior passHref>
              <motion.p
                whileHover={{ scale: 1.05 }}
                className="underline-transition"
              >
                For Developers
              </motion.p>
            </Link>
            <Link href="#business-features" legacyBehavior passHref>
              <motion.p
                whileHover={{ scale: 1.05 }}
                className="underline-transition"
              >
                For Business
              </motion.p>
            </Link>
          </nav>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button variant={"default"} size={"lg"}>
              Join Talentify
            </Button>
          </motion.div>
          <ThemeSwitcher />
        </div>
      </div>
      <div className="sticky top-6 md:hidden flex w-full items-center justify-between ">
        <div className="flex items-center max-w-40 space-x-5 cursor-pointer">
          <Link href="/" legacyBehavior passHref>
            <Image src={logo} alt="logo" className="object-contain" />
          </Link>
        </div>

        <div className="flex items-center justify-self-end gap-4">
          <ThemeSwitcher />
          <Drawer>
            <DrawerTrigger>
              <motion.svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#69cc38"
                xmlns="http://www.w3.org/2000/svg"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <path
                  d="M12 17H19M5 12H19M5 7H19"
                  stroke="#69cc38"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader className="p-4 flex flex-col items-center justify-center gap-4">
                <DrawerTitle className="hidden"> Navigation menu </DrawerTitle>
                <NavigationMenu>
                  <NavigationMenuList className="w-full p-4 flex flex-col items-center justify-center gap-4">
                    <NavigationMenuItem>
                      <Link href="/docs" legacyBehavior passHref>
                        <NavigationMenuLink
                          className={navigationMenuTriggerStyle()}
                        >
                          <motion.p whileHover={{ scale: 1.05 }}>
                            For Developers
                          </motion.p>
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <Link href="/docs" legacyBehavior passHref>
                        <NavigationMenuLink
                          className={navigationMenuTriggerStyle()}
                        >
                          <motion.p whileHover={{ scale: 1.05 }}>
                            For Business
                          </motion.p>
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </DrawerHeader>
              <DrawerFooter className="p-4 mb-3">
                <Button variant={"default"} size={"lg"}>
                  Join Talentify
                </Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </motion.header>
  );
}

export default Header;
