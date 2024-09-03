import './Header.scss';
function Header() {
  const navItems = [
    { href: '#home', label: 'Главная' },
    { href: '#words', label: 'Список слов' },
    { href: '#about', label: 'О нас' },
    { href: '#contact', label: 'Контакты' },
  ];

  return (
    <header className="header">
      <div className="logo">Лингвинёнок</div>
      <nav className="nav">
        <ul>
          {navItems.map((item, index) => (
            <li key={index}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
