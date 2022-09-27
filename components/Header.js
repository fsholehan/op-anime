import MenuLink from "./MenuLink";

function Header() {
  return (
    <header className="flex items-center space-x-4 pb-5">
      <MenuLink href="/" title="Beranda" />
      <MenuLink href="/bookmark" title="Bookmark" />
      <MenuLink href="/about" title="Tentang" />
    </header>
  );
}

export default Header;
