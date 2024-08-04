import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="logo">Лингвинёнок</div>
      <nav className="nav">
        <ul>
          <li>
            <a href="#home">Главная</a>
          </li>
          <li>
            <a href="#words">Список слов</a>
          </li>
          <li>
            <a href="#about">О нас</a>
          </li>
          <li>
            <a href="#contact">Контакты</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
