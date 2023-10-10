import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Menu } from "@headlessui/react";

const links = [
  { href: '/account-settings', label: 'Account settings' },
  { href: '/support', label: 'Support' },
  { href: "/license", label: "License" },
  { href: "/logout", label: "Logout" },
];
interface MyMenuProps {
  children: ReactNode,
}

export function MyMenu({children}:MyMenuProps) {
  return (
    <Menu as="div" className="w-[4.5rem] h-[4.5rem] rounded-full bg-red-500">
      <Menu.Button className="h-full text-white font-bold inline-flex w-full justify-center items-center rounded-md bg-opacity-20 px-4 py-2 text-[1.8rem]  hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 text-center">
        M
      </Menu.Button>
      <Menu.Items
        as="div"
        className="w-[15rem] h-max flex flex-col gap-4 bg-white p-6 rounded-md mt-2 font-semibold text-start"
      >
          {links.map((link) => ( 
          <Menu.Item
            as="a"
            key={link.href}
            href={link.href}
            className="ui-active:bg-blue-500 ui-active:text-white ui-not-active:bg-white ui-not-active:text-black text-[1.5rem]"
          >
            {link.label}
          </Menu.Item>
       ))}
      </Menu.Items>
    </Menu>
  );
}
