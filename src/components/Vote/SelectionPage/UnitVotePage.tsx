import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { CheckboxValueType } from 'antd/lib/checkbox/Group';
import SelectVote from '../Forms/SelectVote';

import '../../../styles/routes.scss';

const UnitVotePage = () => {
  const domain = process.env.REACT_APP_SERVER_URL as string;
  const [choicesList, setChoicesList] = useState<string[]>([]);
  const [checkedList, setCheckedList] = useState<CheckboxValueType[]>([]);
  const index = 1;

  const onChange = (e: CheckboxValueType[]): void => {
    const newCheckedList: CheckboxValueType[] = e;
    if (newCheckedList !== checkedList) {
      setCheckedList(newCheckedList);
    }
  };
  useEffect(() => {
    axios.get(`${domain}/api/choices/unit`)
      .then(({ data }) => {
        console.log(data);
        setChoicesList(data);
      });
  }, []);
  useEffect(() => {
    console.log(checkedList);
  }, [checkedList]);

  return (
    <div className="ContentWrap">
      <div className="title">
        <b>최고의 유닛상</b><br />
      </div>
      <hr className="contour" />

      <div className="article">
        가장 환상적인 호흡을 보여준 <b>3개의 유닛</b>에게 투표해주세요!
        실력이나 그런 것과 무관하게, 내가 이 조합이 정말 좋았다 싶었던 유닛이면 됩니다.<br />
        <b>타부문과 중복투표 불가</b>
        <div className="voteWrap">
          <SelectVote options={choicesList} onChange={onChange} />
        </div>
      </div>
      <Link to="/vote/section/new" className="next">다음</Link>
    </div>
  );
};

export default UnitVotePage;
