import * as React from 'react';
import { Link } from 'react-router-dom';

import '../../styles/routes.scss';
import './QuizOverview.scss';

const OverViewContents = () => (
  <div className="ContentWrap">
    <div className="title">
      노래자랑 퀴즈
    </div>
    <hr className="contour" />
    <div className="article">
      대충 막 되는대로 아무 회차나 번호 적고 나서 음원만 쏙 얻고 빠지려는 얌체족을 거르기 위한<br />
      71회~80회차에 걸친 노래자랑 퀴즈!<br />
      <br />
      <b>9문제 중에 5개 이상</b> 맞힌 사람에게만 음원 배포 예정!<br />
      (문제당 10점, 50점 이상 획득)<br />
      <br />
      만점받으려고 넘 걱정하지 마세요 50점 이상이면 다 됩니다.<br />
      만점 받은 거 누군지도 안 찾아보고 칭찬도 따로 안 해줌.<br />
      외워서 하실 필요 없고 어디서 이 답을 찾을 수 있는지 안다면 됩니다.<br />
      오픈북 테스트 같은 거라구
    </div>
    <Link to="/quiz?index=1" className="next">다음</Link>
  </div>
);


export default OverViewContents;
