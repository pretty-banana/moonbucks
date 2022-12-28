import * as style from '../../styles/NavBarStyles';
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <style.Container>
        <style.Inner>
          <style.InnerSpanWrap>
            <style.InnerSpan>Sign in</style.InnerSpan>
            <style.InnerSpan>My Moonbucks</style.InnerSpan>
            <style.InnerSpan>Customer Service & Ideas</style.InnerSpan>
            <style.InnerSpan>Find a Store</style.InnerSpan>
          </style.InnerSpanWrap>

          <style.InnerMenuList></style.InnerMenuList>
        </style.Inner>
      </style.Container>
    </div>
  );
};

export default NavBar;
