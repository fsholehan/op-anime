import Link from "next/link";
import React from "react";

function MenuLink({ href, title }) {
  return (
    <Link href={href}>
      <a>{title}</a>
    </Link>
  );
}

export default MenuLink;
