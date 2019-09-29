import React from 'react';
import { Link } from 'react-router-dom';

import SelectVote from './Forms/SelectVote';

import '../../styles/routes.scss';

const SectionVoteContents = () => (
  <div className="ContentWrap">
    <div className="title">
      부문상 투표
    </div>
    <hr className="contour" />
    <div className="article">
      <b>이 성대가 대단하다! 가창력이 뛰어난 프로듀서 상</b><br />
      내 생각에 가장 가창력이 뛰어난 것 같다고 생각하는 프로듀서분을 뽑아주세요.<br />
      <b>타부문과 중복투표 불가</b>
      <div className="voteWrap">
        <SelectVote />
      </div>
    </div>
    <Link to="/quiz?index=1" className="next">다음</Link>
  </div>
);

export default SectionVoteContents;
