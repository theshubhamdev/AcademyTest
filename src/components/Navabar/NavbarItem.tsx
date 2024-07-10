import React, { FC } from "react";
import { Button } from "../ui/button";

interface Props {
  label: string;
  newTab?: boolean;
}

const NavbarItem: FC<Props> = ({ label, newTab = false }) => {
  if (!newTab)
    return <Button className="bg-transparent text-white">{label}</Button>;

  return (
    <div className="border-b-2">
      <Button className="bg-transparent px-1 text-white">{label}</Button>
      <Button className="bg-purple-500 p-2 h-5 text-xs">New</Button>
    </div>
  );
};

export default NavbarItem;
