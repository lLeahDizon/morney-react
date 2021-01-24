import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

require('icons/money.svg');// svgo-loader => svg-sprite-loader
require('icons/label.svg');// svgo-loader => svg-sprite-loader
require('icons/statistics.svg');// svgo-loader => svg-sprite-loader

// console.log(x, y);

const NavWrapper = styled.nav`
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);

  > ul {
    display: flex;

    > li {
      width: 33.3%;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 4px 0;

      .icon {
        width: 24px;
        height: 24px;
      }
    }
  }
`;

const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <svg className='icon'>
            <use xlinkHref='#label'/>
          </svg>
          <Link to="/tags">标签页</Link>
        </li>
        <li>
          <svg className='icon'>
            <use xlinkHref='#money'/>
          </svg>
          <Link to="/money">记账页</Link>
        </li>
        <li>
          <svg className='icon'>
            <use xlinkHref='#statistics'/>
          </svg>
          <Link to="/statistics">统计页</Link>
        </li>
      </ul>
    </NavWrapper>
  );
};

export default Nav;
