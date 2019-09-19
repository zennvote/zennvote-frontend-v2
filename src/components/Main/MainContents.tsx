import * as React from 'react';
import { Link } from 'react-router-dom';

import './MainContents.scss';

const MainContents = () => (
  <div className="MainContent">
    <div className="title">
      전국 프로듀서 노래자랑
      <div className="subtitle">
        시즌 8 시상식 시청자 투표
      </div>
    </div>
    <hr className="contour" />
    <Link to="/overview" className="next">시작하기 →</Link>
  </div>
);

export default MainContents;
