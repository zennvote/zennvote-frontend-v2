import * as React from 'react';
import { Link } from 'react-router-dom';

import RadioGroup from '../Radio/RadioGroup';

import '../../styles/routes.scss';
import './QuizOverview.scss';

type Props = { index: number };

const OverViewContents = ({ index }: Props) => (
  <div className="ContentWrap">
    <div className="title">
      노래자랑 퀴즈
    </div>
    <hr className="contour" />
    <div className="quiz-title">
      {index}. 이번 시즌에 한 시리즈의 빨/파/노 타입의 타입곡이 전부 나온 회차가 있었는데요, 그 곡들은 어느 시리즈의 음반인가요?
    </div>
    <div className="quiz-selection">
      <RadioGroup values={['테스트', '값', '입니다']} />
    </div>
    <Link to={`/quiz?index=${index + 1}`} className="next">다음</Link>
  </div>
);

export default OverViewContents;
