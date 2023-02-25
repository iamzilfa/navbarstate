import { useRouter } from "next/router";
import React from "react";
import Link from "next/link";

function menuItem() {
  const menus = useRouter();
  const name = menus.query.menu;
  return (
    <div className=" flex flex-col items-center h-screen justify-center gap-4">
      <p className="text-3xl">{name} Page</p>
      <Link href={"/"} className="text-blue-800 font-medium hover:underline">
        Back Home
      </Link>
    </div>
  );
}

export default menuItem;
