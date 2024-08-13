"use client";
import React from "react";
import SideNav from "@/components/SideNav";
import {
  BadgeAlert,
  ContactRound,
  House,
  Newspaper,
  Power,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathName = usePathname();
  const listData = [
    {
      listName: "Home",
      listIcon: <House size={32} /> || "Icon",
      listLink: "/",
    },
    {
      listName: "Invoices",
      listIcon: <Newspaper size={32} /> || "Icon",
      listLink: "/dashboard/invoices",
    },
    {
      listName: "Customers",
      listIcon: <ContactRound size={32} /> || "Icon",
      listLink: "/dashboard/customers",
    },
  ]; //["Home", "Invoices", "Customers"];
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full max-w-[340px]">
        <div className="flex gap-5 bg-blue-600 rounded min-h-[240px] items-end pb-3 pl-3">
          <BadgeAlert size={42} color={"white"} />
          <h2 className={"text-4xl text-white"}>Acme</h2>
        </div>
        <div className="flex flex-col bg-blue-200 min-h-screen">
          <ul>
            {listData.map((item, id) => (
              <Link href={item.listLink} key={id}>
                <li
                  className={clsx(
                    "flex flex-row gap-4 text-black text-xl items-center bg-blue-100 py-3 px-6 mt-2",
                    { "bg-blue-300 text-blue-600": pathName === item.listLink },
                  )}
                >
                  {item.listIcon}
                  {item.listName}
                </li>
              </Link>
            ))}
          </ul>
          <div className="flex items-center justify-center bg-emerald-200 min-h-[80px] justify-self-end">
            <Link href={"/log-out"}>
              <li
                className={
                  "flex flex-row gap-4 text-black text-xl items-center bg-blue-100 py-3 px-6 mt-2"
                }
              >
                <Power size={32} />
                Log out
              </li>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
};

export default Layout;
