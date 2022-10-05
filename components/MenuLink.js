import Link from "next/link";

function MenuLink({ href, title }) {
  return (
    <Link href={href}>
      <a className="hover:underline">{title}</a>
    </Link>
  );
}

export default MenuLink;
