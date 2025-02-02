import Image from "next/image";
import React from "react";
import logo from "../../public/uber_logo.png";
import taxi from "../../public/taxi.png";
import box from "../../public/box.png";
import { UserButton } from "@clerk/nextjs";

const Header = () => {
  const headerMenu = [
    {
      id: 1,
      name: "Ride",
      icon: { taxi },
    },
    {
      id: 2,
      name: "Package",
      icon: { box },
    },
  ];

  return (
    <div
      className="p-5 pb-3 pl-10 border-b-[4px]
     border-gray-200 flex items-center justify-between"
    >
      <div className="flex gap-24 items-center">
        <Image src={logo} alt="logo" width={70} height={70} />
        <div className="flex gap-6 items-center">
          {headerMenu.map((item) => {
            {
              <div className="flex gap-2 items-center">
                <Image src={taxi} alt="logo" width={17} height={17} />
                <h2 className="text-[14px] font-medium">taxi</h2>
              </div>;
            }
          })}
        </div>
      </div>
      <UserButton />
    </div>
  );
};

export default Header;
