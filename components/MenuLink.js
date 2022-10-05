import Link from "next/link";
import React from "react";

function MenuLink({ href, title }) {
  return (
    <Link href={href}>
      <a className="hover:underline">{title}</a>
    </Link>
  );
}

export default MenuLink;
