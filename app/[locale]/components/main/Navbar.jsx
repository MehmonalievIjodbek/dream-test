import React from "react";
import { menunav } from "./../common/static/navbarmenu";
import Link from "next/link";

const Navbar = () => {
  return (
    <navbar className="navbar-menu">
      {menunav?.map((item) => (
        <ul key={item?.id}>
          <Link href={item?.path}>
            <li>{item?.label}</li>
          </Link>
        </ul>
      ))}
    </navbar>
  );
};

export default Navbar;
