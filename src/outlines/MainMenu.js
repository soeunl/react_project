import React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { color } from '../styles/color';
import fontSize from '../styles/fontSize';

const { primary, light, purple, dark } = color;
const { medium } = fontSize;

const MenuBox = styled.nav`
  background: ${purple};

  div {
    display: flex;
    height: 50px;

    a {
      color: ${dark};
      line-height: 50px;
      padding: 0 50px;
      font-size: ${medium};

      &.on {
        background: ${primary};
        color: ${light};
      }

      &:hover {
        background: ${primary};
        color: ${light};
      }
    }
  }
`;

const MainMenu = () => {
  const { t } = useTranslation();

  return (
    <MenuBox>
      <div className="layout-width">
        <NavLink
          to="/news"
          className={({ isActive }) => classNames({ on: isActive })}
        >
          {t('뉴스')}
        </NavLink>
      </div>
    </MenuBox>
  );
};

export default React.memo(MainMenu);
