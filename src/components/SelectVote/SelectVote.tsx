import * as React from 'react';
import { Link } from 'react-router-dom';

import 'SelecVote.css';
const OverViewContents = () => (
  <div className="ContentWrap">
    <div className="title">
      안내사항
    </div>
    <hr className="contour" />
    <div className="article">
      노래자랑 영상이나 본 방송 합쳐 적어도 <b>5회</b> 이상 챙겨보신 분들을 대상으로 하는 투표입니다.
      <br /><br />
      끝까지 <b>꼼꼼하게</b> 작성해주실 수 있는 분만 참여 부탁드립니다.
      <br /><br />
      <b>참가 경험</b>이 있는 분도 모두 투표 가능합니다.
      <br />
      <b>자기에 대한 투표</b>도 원한다면 하셔도 됩니다.
    </div>
    <Link to="/apply" className="next">다음</Link>
  </div>
);

export default OverViewContents;
