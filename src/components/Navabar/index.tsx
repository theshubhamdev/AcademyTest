import React from "react";
import NavbarItem from "./NavbarItem";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const Navbar = () => {
  const Menu_Items = [
    {
      name: "Compass",
      new: false,
    },
    {
      name: "Explore",
      new: false,
    },
    {
      name: "Academy",
      new: true,
    },
    {
      name: "NFTs",
      new: false,
    },
    {
      name: "For Projects",
      new: false,
    },
  ];

  return (
    <nav className="flex flex-grow justify-around items-center">
      {Menu_Items.map((item) => (
        <NavbarItem key={item.name} label={item.name} newTab={item.new} />
      ))}
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input
          className="bg-black rounded-2xl"
          type="email"
          placeholder="Search for ecosystems, trending, and all"
        />
        <Button className="bg-white text-black" type="submit">
          Sign In
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
