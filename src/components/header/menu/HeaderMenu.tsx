import React from 'react';

interface IHeaderMenu {
  openMenu: boolean;
  setOpenMenu: Function;
}

export const HeaderMenu = ({ openMenu, setOpenMenu }: IHeaderMenu) => {
  return (
    <div
      className={openMenu ? 'header__menu active' : 'header__menu'}
      onClick={() => setOpenMenu(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={
          openMenu ? 'header__menu-content active' : 'header__menu-content'
        }
      >
        <div
          className="header__menu-content-close"
          onClick={() => setOpenMenu(false)}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.4 14L0 12.6L5.6 7L0 1.4L1.4 0L7 5.6L12.6 0L14 1.4L8.4 7L14 12.6L12.6 14L7 8.4L1.4 14Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="navigation">
          <nav>
            <ul>
              <li>О нас</li>
              <li>Контакты</li>
              <li>бла бла бла</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};
