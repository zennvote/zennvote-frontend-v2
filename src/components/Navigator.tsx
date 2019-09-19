import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigator.scss';

const Navigator = () => (
  <div className="navigator">
    <NavLink exact to="/" className="item" activeClassName="active">시작하기</NavLink>
    <NavLink to="/overview" className="item" activeClassName="active">안내</NavLink>
    <NavLink to="/apply" className="item" activeClassName="active">투표 등록</NavLink>
    <NavLink to="/quiz" className="item" activeClassName="active">노래자랑 퀴즈</NavLink>
    <NavLink to="/vote/section" className="item" activeClassName="active">부문상</NavLink>
    <NavLink to="/vote/fame" className="item" activeClassName="active">인기상</NavLink>
    <NavLink to="/vote/master" className="item" activeClassName="active">대상</NavLink>
    <NavLink to="/vote/etc" className="item" activeClassName="active">덤</NavLink>
  </div>
);

export default Navigator;
