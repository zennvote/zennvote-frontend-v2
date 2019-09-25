import * as React from 'react';
import { Link } from 'react-router-dom';

import RadioGroup from '../Radio/RadioGroup';

import '../../styles/routes.scss';
import './QuizContents.scss';

const OverViewContents = () => (
  <div className="ContentWrap">
    <div className="title">
      노래자랑 퀴즈
    </div>
    <hr className="contour" />
    {
      // 이 아래 아티클은 진입 전 디자인.
    }
    <div className="article hidden">
      대충 막 되는대로 아무 회차나 번호 적고 나서 음원만 쏙 얻고 빠지려는 얌체족을 거르기 위한<br />
      71회~80회차에 걸친 노래자랑 퀴즈!<br />
      <br />
      <b>9문제 중에 5개 이상</b> 맞힌 사람에게만 음원 배포 예정!<br />
      (문제당 10점, 50점 이상 획득)<br />
      <br />
      만점받으려고 넘 걱정하지 마세요 50점 이상이면 다 됩니다.<br />
      만점 받은 거 누군지도 안 찾아보고 칭찬도 따로 안 해줌.<br />
      외워서 하실 필요 없고 어디서 이 답을 찾을 수 있는지 안다면 됩니다. 오픈북 테스트 같은 거라구
    </div>
    {
      // 이 아래로는 이제 실제 문제 풀이 들어갔을때 부분. 이 기능을 어케 구현할지는 저두 잘 모르겠네유 라우트 따로 뺄거면 빼시구 퀴즈 구현할때 알아서 해주슈
    }
    <div className="quiz-title">
      이번 시즌에 한 시리즈의 빨/파/노 타입의 타입곡이 전부 나온 회차가 있었는데요, 그 곡들은 어느 시리즈의 음반인가요?
    </div>
    <div className="quiz-selection">
      <RadioGroup values={['테스트', '값', '입니다']} />
    </div>
    <Link to="/apply" className="next">다음</Link>
  </div>
);

export default OverViewContents;
