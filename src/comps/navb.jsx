import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Book, ChevronDown, Moon, SunDim } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Link } from "react-router-dom";
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarShortcut,
  MenubarItem,
} from "../components/ui/menubar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/components/ui/theme-provider";

const Nave = () => {
  const { setTheme } = useTheme();

  return (
    <nav
      className={`bg-neutral-200 bg-opacity-30 text-primary rotating-border w-fit px-6 flex mt-2 mx-auto`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-10">
          <div className="flex-shrink-0 ">
            <Link to="/">
              <span className="text-2xl font-bold text-primary cursor-pointer">
                School MGM
              </span>
            </Link>
          </div>

          <Menubar className="no-hover-bg">
            <MenubarMenu>
              <MenubarTrigger className="no-hover-bg">Home</MenubarTrigger>
              <MenubarContent className="px-4 no-hover-bg">
                <Link to="/">
                  <MenubarItem className="flex no-hover-bg">
                    Course list{" "}
                    <MenubarShortcut>
                      <Book />
                    </MenubarShortcut>
                  </MenubarItem>
                </Link>
                <Link>
                  <MenubarItem className="no-hover-bg">Quiz</MenubarItem>
                </Link>
              </MenubarContent>
            </MenubarMenu>
            <Link to="/about">
              <MenubarMenu>
                <MenubarTrigger className="no-hover-bg">About</MenubarTrigger>
              </MenubarMenu>
            </Link>
            <Link to="/contact">
              <MenubarMenu>
                <MenubarTrigger className="no-hover-bg">Contact</MenubarTrigger>
              </MenubarMenu>
            </Link>
          </Menubar>

          <div className="flex items-center">
            <div className="mx-3 relative">
              <div className="flex items-center p-1 rounded no-hover-bg">
                <Avatar>
                  <AvatarImage
                    src="https://wallpapers.com/images/featured/goku-background-vhm3f71ddueli0kl.jpg"
                    alt="photo"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="cursor-pointer flex items-center no-hover-bg">
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex justify-center items-center">
                      <span className="hidden md:flex mx-2 text-sm font-medium text-primary">
                        username
                      </span>
                      <ChevronDown
                        className="ml-1 h-4 w-4 text-primary"
                        aria-hidden="true"
                      />
                    </DropdownMenuTrigger>

                    <DropdownMenuContent>
                      <DropdownMenuLabel>My Account</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Profile</DropdownMenuItem>
                      <DropdownMenuItem>Setting</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Logout</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <SunDim className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                  System
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            {/* <Button className="mx-3 bg-background text-primary hover:bg-secondary">
              mode
            </Button> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nave;
