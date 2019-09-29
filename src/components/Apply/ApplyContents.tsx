import * as React from 'react';
import { Link } from 'react-router-dom';

import '../../styles/routes.scss';
import './ApplyContents.scss';

const ApplyContents = () => (
  <div className="ContentWrap">
    <div className="title">
      투표 등록
    </div>
    <hr className="contour" />
    <div className="article">
      이메일은 중복 투표 방지용으로, 수집되지 않습니다.<br />
      또한 닉네임과 연결지어 누구인지 확인하지도 않습니다.<br />
      해당 이메일로 음원 다운로드 링크가 제공됩니다!<br />
    </div>
    <form action="post">
      <input type="text" placeholder="이메일" />
      <input type="password" placeholder="비밀번호" />
      <input type="password" placeholder="비밀번호 확인" />
      <div className="form-message" />
    </form>
    <Link to="/quiz" className="next">투표 등록</Link>
  </div>
);

export default ApplyContents;
