import './Header.scss';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/Logo.jpg';
function Header() {
  const navItems = [
    { to: '/', label: 'Главная' },
    { to: '/game', label: 'Тренажер' },
  ];

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Логотип Lingua" className="logo-image" />
        </Link>
      </div>
      <nav className="nav">
        <ul>
          {navItems.map((item, index) => (
            <li key={index}>
              <Link to={item.to}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
