import React from 'react';
import { NavLink } from 'react-router-dom';
import { HeaderMenu } from './menu/HeaderMenu';

export const Header = () => {
  const [openMenu, setOpenMenu] = React.useState(false);

  const onOpenMenu = () => {
    setOpenMenu((prev) => !prev);
  };
  console.log(openMenu);

  return (
    <>
      <div className="header">
        <div className="header__todo-logo">
          <h1>
            TO<span>D</span>O
          </h1>
        </div>
        <div className="header__todo-nav">
          <NavLink
            to={'/'}
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Главная
          </NavLink>
          <NavLink
            to={'/completed'}
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Выполненные
          </NavLink>
          <div className="header__todo-nav-burger-menu" onClick={onOpenMenu}>
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 2H20M2 8H20M2 14H20"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
      <HeaderMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />
    </>
  );
};
